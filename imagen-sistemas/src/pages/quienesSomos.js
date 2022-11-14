import "../styles/quienesSomos.css"

function QuienesSomos() {
    return<div className=" page">
        <div className="aboutBG">
            <h1 className="aboutTittle">Quiénes somos</h1>
        </div>
        <div className="about-div ">
            <div className="aboutBox">
                <div className="aboutItems">
                    <h2 className="aboutCenter">Acerca de nuestro Trabajo</h2>
                    <div className="Description">
                        <div>Imagen Sistemas se encarga de promover la imagen de la Facultad de Ingeniería de Sistemas a través de la realización de diferentes actividades como:  </div>
                    </div>

                    <div className= "activityBox">
                        <ActivityCard
                            img="https://www.unir.net/wp-content/uploads/2021/04/210419_img_ficha_web.jpg"
                            description = {"Coordinación para participación de la FIS en jornadas y concursos organizados por otras universidades e instituciones."}/>
                        <ActivityCard
                            img="https://cdn.discordapp.com/attachments/925928236481912839/1041473158408056943/Captura.PNG"
                            description = {"Organización de cursos, conferencias y casas abiertas de la FIS."}/>
                        <ActivityCard
                            description = {"Coordinación y organización de giras técnicas."}/>
                        <ActivityCard
                            description = {"Soporte y mantenimiento a escuelas y colegios."}/>
                        <ActivityCard
                            description = {"Gestión de carteleras y publicidad gráfica de la imagen de la FIS."}/>
                    </div>

                    <div className="Mision">
                        <h2>Misión</h2>
                        <p>Imagen Sistemas se encarga de promover la imagen de la Facultad de
                    Ingeniería de Sistemas a través de la realización de diferentes actividades que
                    permitan mostrar el conocimiento y aplicación de las Tecnologías de Información y
                    Comunicaciones para solucionar problemas de transcendencia para la sociedad.</p>
                    </div>

                    <div>
                        <h2>Visión</h2>
                        <p>Imagen Sistemas pretende posicionar a La Facultad de Ingeniería de Sistemas
                    como un referente de la Escuela Politécnica Nacional en el campo de las Tecnologías
                    de la Información y Comunicaciones.</p>
                        <h2>Valores</h2>
                    </div>
                    <div>
                        <span>Responsabilidad | Trabajo en equipo | Compromiso | Innovación | Calidad</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
}

const ActivityCard = (props) => {
    return <div className={"activity-card"}>
        <div className={"activity-card-img-wrapper"}>
            <img className={"activity-card-img"} src={props.img}></img>
        </div>
        <div className="activity-card-content">
            <a>{props.description}</a>
        </div>
    </div>
}
export default QuienesSomos;