import React from "react";

const Form = () =>{
    return  <div className="form-wrapper">
        <h2 className={"center-title"}>Contáctanos</h2>

        <div className={".grid-container"} style={{padding: 10, display: "grid"}}>
            <div style={{gridRow: 1, gridColumn: 1,padding:10}}>
                <label className={"form-question-description"}>Nombre</label>
                <input type="text" className="form-question"></input>
            </div>
            <div style={{gridRow: 1, gridColumn: 2,padding:10}}>
                <label className={"form-question-description"}>Apellido</label>
                <input type="text" className="form-question"></input>
            </div>

            <div style={{padding:"0 10px 10px 10px", gridColumn: "span 2"}}>
                <label className={"form-question-description"}>Email</label>
                <input type="email" className="form-question"></input>
            </div>

            <div style={{padding:10, gridRow: 3, gridColumn: "span 2"}}>
                <textarea placeholder="Escriba su mensaje aquí..."></textarea>
            </div>
            <button className={"enviar-button"}>Enviar</button>
        </div>
    </div>
}
export default Form