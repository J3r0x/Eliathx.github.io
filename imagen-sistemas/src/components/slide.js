import React, {useContext, useState} from "react";
import "../styles/slide.css";


function Slide(props){

    return <div className="slide">
        <img className="slide-img" src={props.img} alt="EPN"/>
        <div className="slide-content">
            <h2>{props.title}</h2>
            <a>{props.text}</a>
        </div>

       {/* <a className="slideshow-circles">○ ⬤ ○ ○ ○</a>*/}
    </div>
}

export default Slide;
