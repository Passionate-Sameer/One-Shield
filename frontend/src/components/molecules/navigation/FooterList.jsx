import { Link } from "react-router-dom";

export default function FooterList({heading, listItems}){

    return (
        <div className="col-sm-6 col-lg-3 py-3">
            <h5>{heading}</h5>
            <ul className="footer-menu">
                {listItems.map((item, index) => {
                    return (
                        <li key={index}><Link to={item.link}>{item.linkName}</Link></li>
                    )
                })}
            </ul>
        </div>
    );
}