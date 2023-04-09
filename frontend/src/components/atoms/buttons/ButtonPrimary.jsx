import { Link } from "react-router-dom";

export default function ButtonPrimary({clsName, linkTo, text}) {
    let classNames = "btn btn-primary "
    if (clsName){
        classNames += clsName;
    }

    return (
        <Link to={linkTo}>
            <button className={classNames}>
                {text}
            </button>
        </Link>
    )
}