import BackgroundImage from '../../../assets/images/car_insurance.jpeg';
import ButtonPrimary from '../../atoms/buttons/ButtonPrimary';

export default function Hero() {
    return (
        <div className="page-hero bg-image overlay-dark" style={{backgroundImage: `url(${BackgroundImage})`}}>
            <div className="hero-section">
                <div className="container text-center wow zoomIn">
                    <span className="subhead">Don't crash without us, better than the rest</span>
                    <h1 className="display-4">Auto Insurance</h1>
                    <ButtonPrimary linkTo="quote" text="Get Quote"/>
                </div>
            </div>
      </div>
    )
}