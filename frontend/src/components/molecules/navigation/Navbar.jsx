import { Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa"
import NavLinks from "./NavLinks";

export default function Navbar(){
    return (
        <nav className="navbar navbar-expand-lg navbar-light shadow-sm">
            <div className="container">
                <Link className="navbar-brand" to={`/`}><span className="text-primary">One</span>-Shield</Link>
                <div className="input-group input-navbar">
                    <div className="input-group-prepend">
                        <button className="btn-search"><span className="input-group-text"><FaSearch/></span></button>
                    </div>
                    <input type="text" className="form-control" placeholder="Enter keyword..."/>
                </div>

                <NavLinks/>
            </div>
        </nav>
    )
}