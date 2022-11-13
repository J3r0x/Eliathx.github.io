import "../styles/quienesSomos.css"

function QuienesSomos() {
    return <div className="about-div page" style={{textAlign: "center"}}>
        <h1 className={"big-title"}>Quiénes somo</h1>

        <h2 className={"center-title"}>Descripcion</h2>
        <div>
            <div style={{textAlign: "center"}}>Imagen Sistemas se encarga de promover la imagen de la Facultad de Ingeniería de Sistemas a través de la realización de diferentes actividades como:  </div>

            <div >
                <ActivityCard description = {"Coordinación para participación de la FIS en jornadas y concursos organizados por otras universidades e instituciones."}/>
                <ActivityCard description = {"Organización de cursos, conferencias y casas abiertas de la FIS."}/>
                <ActivityCard description = {"Coordinación y organización de giras técnicas."}/>
                <ActivityCard description = {"Soporte y mantenimiento a escuelas y colegios."}/>
                <ActivityCard description = {"Gestión de carteleras y publicidad gráfica de la imagen de la FIS."}/>
            </div>

        </div>

        <div>
            <h2 className={"center-title"}>Misión</h2>
            <span>Imagen Sistemas se encarga de promover la imagen de la Facultad de
            Ingeniería de Sistemas a través de la realización de diferentes actividades que
            permitan mostrar el conocimiento y aplicación de las Tecnologías de Información y
            Comunicaciones para solucionar problemas de transcendencia para la sociedad.</span>
        </div>

        <div>
            <h2 className={"center-title"}>Visión</h2>
            <span>Imagen Sistemas pretende posicionar a La Facultad de Ingeniería de Sistemas
            como un referente de la Escuela Politécnica Nacional en el campo de las Tecnologías
            de la Información y Comunicaciones.</span>
            <h2 className={"center-title"}>Valores</h2>
        </div>
        <div style={{textAlign: "center"}}>
            <span>Responsabilidad | Trabajo en equipo | Compromiso | Innovación | Calidad</span>
        </div>
    </div>
}

const ActivityCard = (props) => {
    return <div className={"activity-card"}>
        <div className="activity-card-content">
            <a>{props.description}</a>
        </div>
    </div>
}
export default QuienesSomos;