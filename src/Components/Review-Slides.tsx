import { Carousel } from "react-bootstrap"
import trevor from "./trevor.png"
const Slides = () => {
    return (
            <Carousel className="carousel">
                <Carousel.Item>
                    <h1>Piss</h1>
                </Carousel.Item>
                <Carousel.Item>
                    <img src={trevor} alt="trevor"></img>
                </Carousel.Item>
                <Carousel.Item>
                    <h1>awesome piss!</h1>
                </Carousel.Item>
            </Carousel>
    )
}

export default Slides
