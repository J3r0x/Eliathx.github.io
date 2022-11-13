import "../styles/Biblioteca.css"

function Biblioteca(){
    return <div className={"page"}>
        <div>
            <h1 className={"big-title"}>BIBLIOTECA DE SISTEMAS </h1>
            <span>La Biblioteca de Sistemas cuenta con renovadas instalaciones junto al Departamento de Bienestar Estudiantil.</span>
        </div>

        <div className={"div-grandeXD"}>
            <div style={{width: "50%"}}>
                <h2 className={"center-title"}> Horario de atencion</h2>
                <span>Lunes a Viernes de 8:00 a 18:00</span>
            </div>

            <div className={"img-Horario"}>
                <img style={{width: "45%"}} src={"https://imagenfis.epn.edu.ec/images/biblioteca-de-sistemas/20160212_145800.jpg"} alt={"Imagen de el interior de la biblioteca con personas haciendo actividades"}/>
            </div>
        </div>


    </div>
}
export default Biblioteca