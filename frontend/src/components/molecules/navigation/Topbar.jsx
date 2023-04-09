import { Link } from "react-router-dom";
import { MdEmail } from "react-icons/md"
import { IoCall } from "react-icons/io5"
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa"

export default function Topbar(){
    return (
        <div className="topbar">
            <div className="container">
                <div className="row">
                    <div className="col-sm-8 text-sm">
                        <div className="site-info">
                            <Link to={`/`}>
                                <span className="text-primary"><IoCall/></span> (+81)-070-4455-6666
                            </Link>
                            <span className="divider">|</span>
                            <Link to={`/`}>
                                <span className="text-primary"><MdEmail/></span>insurance@oneshield.com
                            </Link>
                        </div>
                    </div>
                    <div className="col-sm-4 text-right text-sm">
                        <div className="social-mini-button">
                            <Link to="https://www.facebook.com/" target="_blank"><FaFacebookF/></Link>
                            <Link to="https://www.twitter.com/" target="_blank"><FaTwitter/></Link>
                            <Link to="https://www.instagram.com/" target="_blank"><FaInstagram/></Link>
                            <Link to="https://www.youtube.com/" target="_blank"><FaYoutube/></Link>
                            <Link to="https://www.linkedin.com/" target="_blank"><FaLinkedin/></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}