import { Link } from "react-router-dom";
import {FaFacebookF, FaTwitter, FaInstagram, FaLinkedin, FaYoutube} from "react-icons/fa"
import FooterList from "../../molecules/navigation/FooterList";
import { footerData } from "../../../utils/data/footerData";

export default function Footer() {
    return (
        <footer className="page-footer">
            <div className="container">
                <div className="row px-md-3">
                    {footerData.map((data, index)=>{
                        return (
                            <FooterList key={index} heading={data.heading} listItems={data.listItems}/>
                        )
                    })}
                    <div className="col-sm-6 col-lg-3 py-3">
                        <h5>Contact</h5>
                        <ul className="footer-menu">
                            <li><p className="footer-link mt-2">Roppongi, Tokyo</p></li>
                            <li><p className="footer-link">0120-345-6789</p></li>
                            <li><p className="footer-link">insurance@oneshield.com</p></li>
                        </ul>
                        <h5 className="mt-3">Social Media</h5>
                        <div className="footer-sosmed mt-3">
                            <Link to={`/`}><FaFacebookF/></Link>
                            <Link to={`/`}><FaTwitter/></Link>
                            <Link to={`/`}><FaInstagram/></Link>
                            <Link to={`/`}><FaYoutube/></Link>
                            <Link to={`/`}><FaLinkedin/></Link>
                        </div>
                    </div>
                </div>

                <hr/>

                <p id="copyright">Copyright &copy; 2020 <Link to={`/`}>One-Shield</Link>. All right reserved</p>
            </div>
        </footer>
    )
}