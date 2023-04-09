import { Link } from "react-router-dom";
import { cardData } from "../../../utils/data/cardData";


export default function CardDeck(){

    return (
        <div className="page-section">
            <div className="container">
                <div className="row card-deck">
                    {cardData.map((card, index)=>{
                        return (
                            <div key={index} className="col-12 col-md-6 col-lg-3 mb-2 ">
                                <Link to={card.linkTo} className="card card-article card-shadow">
                                    <div className="card-img-cap lozad" style={{backgroundImage: card.image}}></div>
                                    <div className="card-body">
                                        <h3 className="card-title">{card.title}</h3>
                                        <p className="card-text">{card.text}</p>
                                    </div>
                                </Link>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}