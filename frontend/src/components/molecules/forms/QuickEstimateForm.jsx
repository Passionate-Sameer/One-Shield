import React, {useState} from "react";
import axios from "axios";
import { FaEdit } from "react-icons/fa";

import { calculateAge } from "../../../utils/helpers/calculation";
import ButtonPrimary from "../../atoms/buttons/ButtonPrimary";

const url = "http://localhost:5050/api/v1/quick_quote"
const currentYear = new Date().getFullYear();
const minYear = currentYear - 25;

export default function QuickEstimate(){
    const [showForm, setShowForm] = useState(true);
    const [dob, setDob] = useState("");
    const [zipCode, setZipCode] = useState("");
    const [vehicleYear, setVehicleYear] = useState("");
    const [vehicleType, setVehicleType] = useState("4");
    const [minCost, setMinCost] = useState("");
    const [maxCost, setMaxCost] = useState("");

    const fetch = async (customerData) => {
        try {
            const response = await axios.post(url, customerData);
            const data = await response.data;
            setMinCost(data.min_premium);
            setMaxCost(data.max_premium);
        } catch (error) {
            console.log(error.response.data);
        }
    }

    const isEnteredDataValid = () => {
        if (dob === ""){
            alert("Enter Date of Birth")
            return false
        }
        if (calculateAge(dob) < 18){
            alert("Applicant cannot be less than 18 years of age")
            return false
        }
        if (zipCode === "" || zipCode.toString().length < 6){
            alert("Enter 6 digit ZIP code")
            return false
        }
        if (vehicleYear === ""){
            alert("Enter manufacturing year of the vehicle")
            return false
        }
        if (vehicleYear > currentYear){
            alert("Manufacturing year of the vehicle cannot be in future")
            return false
        }
    }

    const handleFormSubmission = (e) => {
        e.preventDefault();
        setMinCost("");
        setMaxCost("");
        if (isEnteredDataValid() === false){
            return
        }
        setShowForm(false);
        const age = calculateAge(dob);
        const customerData = {age, zipCode, vehicleYear, vehicleType};
        fetch(customerData);
    }

    return (
        <div className="page-section">
            <div className="container">
                <h1 className="text-center wow fadeInUp" id="quick-estimate">Get a Quick Estimate</h1>
                {showForm &&
                    <form className="main-form">
                        <div className="row mt-5 ">
                            <div className="col-12 col-sm-6 py-2 wow fadeInLeft">
                                <input type="text" className="form-control" placeholder="Your Date of Birth" value={dob}
                                        onChange={(e) => setDob(e.target.value)}
                                        onFocus={(e) => (e.target.type = "date")}
                                        onBlur={(e) => (e.target.type = "text")}
                                        data-testid="dob-input"/>
                            </div>
                            <div className="col-12 col-sm-6 py-2 wow fadeInRight">
                                <input type="number" className="form-control" placeholder="ZIP Code" value={zipCode}
                                        onChange={(e) => setZipCode(e.target.value)}
                                        data-testid="zip-code-input"/>
                            </div>
                            <div className="col-12 col-sm-6 py-2 wow fadeInLeft">
                                <input type="number" className="form-control"
                                        min={minYear} max={currentYear} step="1" placeholder="Vehicle Year" value={vehicleYear}
                                        onChange={(e) => setVehicleYear(e.target.value)}
                                        data-testid="vehicle-year-input"/>
                            </div>
                            <div className="col-12 col-sm-6 py-2 wow fadeInRight">
                                <select className="custom-select" value={vehicleType}
                                        onChange={(e) => setVehicleType(e.target.value)} data-testid="vehicle-type-select">
                                    <option value="4">Four Wheeler</option>
                                    <option value="3">Three Wheeler</option>
                                    <option value="2">Two Wheeler</option>
                                </select>
                            </div>
                        </div>
                        <button className="btn btn-primary mt-3 wow zoomIn" type="submit" onClick={handleFormSubmission}>See my Estimate</button>
                    </form>
                }
                {!showForm &&
                    <div className="row justify-content-center">
                        <div className="col-12 col-lg-10 col-xl-8">
                            <div className="calc-results-container">
                                <button onClick={()=>setShowForm(true)} className="btn-text calc-edit-info-btn">
                                        <FaEdit className="faEdit"/>
                                        <span>Edit my information</span>
                                </button>
                                <div className="results-rates">
                                    <div className="results-rates-headline">
                                        Estimated monthly payment
                                    </div>
                                <div className="rates">
                                    <span className="rate">
                                        <span className="symbol">¥</span><span>{minCost}</span>
                                    </span>
                                    <span className="seperator">-</span>
                                    <span className="rate">
                                        <span className="symbol">¥</span><span>{maxCost}</span>
                                    </span>
                                </div>
                                </div>
                                <div className="results-cta-action">
                                    {/* <button type="submit" className="btn btn-primary mt-3 wow zoomIn">Get my quotes</button> */}
                                    <ButtonPrimary linkTo="quote" text="Get my quotes"/>
                                </div>

                                <div className="calc-desc-box calc-desc-box-border">
                                    <p className="calc-paragraph">We make it easy for you to find the right coverage—at the right price. </p>
                                </div>
                            </div>
                        </div>
                    </div>
                }
            </div>
        </div>
    )
}