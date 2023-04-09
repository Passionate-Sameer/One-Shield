import { Link } from "react-router-dom";
import ButtonPrimary from "../../atoms/buttons/ButtonPrimary";


export default function NavLinks() {
    const navLinkData = [
        {
            link: "/",
            name: "Home"
        },
        {
            link: "products",
            name: "Products"
        },
        {
            link: "claims",
            name: "Claims"
        },
        {
            link: "resources",
            name: "Resources"
        },
        {
            link: "aboutUs",
            name: "About Us"
        },
    ]
    return (
        <div className="collapse navbar-collapse">
        <ul className="navbar-nav ml-auto">
            {navLinkData.map((data, index)=>{
                return (
                    <li key={index} className="nav-item">
                        <Link className="nav-link" to={data.link}>{data.name}</Link>
                    </li>
                )
            })}
            <li className="nav-item">
                <ButtonPrimary clsName="ml-lg-3" linkTo="/" text="Login / Register"/>
            </li>
        </ul>
    </div>
    )
}