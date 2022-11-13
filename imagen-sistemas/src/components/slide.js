import React, {useContext, useState} from "react";
import "../styles/slide.css";


function Slide(props){

    return <div className="slide">
        <img className="slide-img" src={props.img} alt="EPN"/>
        <div className="slide-content">
            <h2 style={{textTransform:"uppercase"}}>{props.title}</h2>
            <p>{props.date}</p>
            <p>{props.text}</p>
        </div>

       {/* <a className="slideshow-circles">○ ⬤ ○ ○ ○</a>*/}
    </div>
}

export default Slide;
