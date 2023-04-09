import BackgroundImageGirl from '../../../assets/images/journey_girl_4.png';
import ButtonPrimary from "../../atoms/buttons/ButtonPrimary"

export default function Welcome() {
    return (
        <div className="page-section pb-0">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6 wow fadeInRight" data-wow-delay="400ms">
                        <div className="img-place custom-img-1">
                            <img src={BackgroundImageGirl} alt="welcome_girl_image"/>
                        </div>
                    </div>
                    <div className="col-lg-6 py-3 wow fadeInUp">
                        <h1>Welcome to Your Insurance <br/> Journey</h1>
                        <p className=" ">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Accusantium aperiam earum ipsa eius, inventore nemo labore eaque porro consequatur ex aspernatur. Explicabo, excepturi accusantium! Placeat voluptates esse ut optio facilis!</p>
                        <ButtonPrimary linkTo={"/"} text="Learn More"/>
                    </div>
                </div>
            </div>
        </div>
    )
}