import { Carousel } from "react-bootstrap"
import PepegaDragonPogCannon from "./pepegadragonpogcannon.png"
import Jhin from "./jhin.jpg"
import Xqc from "./xqc.gif"
import Floppa from "./floppa.jpg"
import JaxHigh from "./jaxHigh.png"

const Shitpost = () => {
    return (
       <div>
           <Carousel className="carouselTwo">
               <Carousel.Item>
                   <img src={PepegaDragonPogCannon} alt="PepegaDragonPogCannon"></img>
               </Carousel.Item>
               <Carousel.Item>
                   <img src={Jhin} alt="Jhin with drip"></img>
               </Carousel.Item>
               <Carousel.Item>
                   <img src={Xqc} alt="Xqc spin"></img>
               </Carousel.Item>
               <Carousel.Item>
                   <img src={Floppa} alt="Floppa"></img>
               </Carousel.Item>
               <Carousel.Item>
                   <img src={JaxHigh} alt="Jax is fucked up man"></img>
               </Carousel.Item>
            </Carousel>
       </div>
    )
}

export default Shitpost
