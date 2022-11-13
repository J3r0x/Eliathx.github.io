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
       autoplay: true,
        autoplaySpeed: 3300,
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
            <Slide title="Pruebas rápidas de detección del virus VIH SIDA"
                   date="Viernes, 11/11/2022 17:18"
                   text="La Dirección de Talento Humano, a través de la Unidad de Seguridad y Salud Ocupacional, te invitan a participar en la toma de pruebas rápidas contra el VIH-SIDA ejecutadas por el Ministerio de Salud Pública del Ecuador."
                   img="https://www.f-enlace.org/wp-content/uploads/2022/03/Prueba-VIH.jpg"
            />
            <Slide title="Centro Médico de la Dirección de Bienestar Politécnico"
                   date="Viernes, 11/11/2022 15:15"
                   text="Brindamos atención médica a la Comunidad Politécnica. El servicio es GRATUITO."
                   img="https://www.epn.edu.ec/wp-content/uploads/2016/07/fepon-plenaria-congreso.jpg"
            />
            <Slide title="Invitación estudiantes ICI2ST"
                   date="Martes, 08/11/2022 8:17"
                   text="A nombre de la Tercera Conferencia Internacional en Sistemas de Información y Tecnologías de Software (ICI2ST 2022),
                   les invitamos a asistir a las diferentes sesiones planificadas como parte de este evento."
                   img="https://ici2st.epn.edu.ec/images/ici2st2022/Banner-ICI2ST-2022.jpg"
            />
            <Slide title="¡BIENVENIDOS AL SEMESTRE 2022B!"
                   date="Lunes, 07/11/2022 15:37"
                   text="Reciban un afectuoso saludo del Decanato y Subdecanato de la Facultad de Ingeniería de Sistemas, así como de la Jefatura del Departamento de Informática y Ciencias de la Computación. "
                   img="https://www.epn.edu.ec/wp-content/uploads/2015/06/sistemas-epn.jpg"
            />

        </Slider>

        <a className="prev">&#10094;</a>
        <a className="next">&#10095;</a>
    </div>
}

export default Slideshow;