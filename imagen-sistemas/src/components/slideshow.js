import React from "react";
import "../styles/slideshow.css"
import Slide from "./slide";
import "../styles/slide.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

function Slideshow() {

    let settings = {
        dots: true,
        infinite: true,
       /* autoplay: true,
        autoplaySpeed: 3300,*/
        speed: 700,
        slidesToShow: 1,
        centerMode: true,
        /*variableWidth: true*/
    }
    return <div className="slide-show">
        <Slider {...settings}>

            <Slide title="Oferta de pasantías remuneradas"
                   date="Viernes, 11/11/2022 22:41"
                   text="4nitee text test lorem"
                   img="https://cdn.discordapp.com/attachments/929558690397298728/1041140947083341844/thumbnail_image.png"

            />
            <Slide title="¡BIENVENIDOS AL SEMESTRE 2022B!"
                   date="Lunes, 07/11/2022 15:37"
                   text="Reciban un afectuoso saludo del Decanato y Subdecanato de la Facultad de Ingeniería de Sistemas, así como de la Jefatura del Departamento de Informática y Ciencias de la Computación. "
                   img="https://www.epn.edu.ec/wp-content/uploads/2015/06/sistemas-epn.jpg"/>
            <Slide title="Texto3"
                   text="4rem"
                   img="https://i.kym-cdn.com/photos/images/facebook/002/421/993/372.jpg"/>
            <Slide title="lOREM"
                   text="loremfffffffff"
                   img="http://www.epn.edu.ec/wp-content/uploads/2015/04/EPN-TUB.jpg"/>
            <Slide title="Otro titulo"
                   text="aqqqqqq"
                   img="https://i.ytimg.com/vi/C6RUp21s6BQ/maxresdefault.jpg"/>

        </Slider>

        <a className="prev">&#10094;</a>
        <a className="next">&#10095;</a>
    </div>
}

export default Slideshow;