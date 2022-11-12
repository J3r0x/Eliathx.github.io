import React from "react";
import "../styles/gallery.css";

const Gallery = (props) => {
    return <div className={"gallery-container"}>
        <div className={"gallery-column"}>
      {
            props.files.map((image) => (
                <div className={"img-gallery-div"}>
                    <img className={"gallery-img"} src={image.src} alt={""}/>
                </div>
            ))
        }

        </div>
        <div className={"gallery-column"}>
            {
                props.files2.map((image) => (
                    <div className={"img-gallery-div"}>
                        <img className={"gallery-img"} src={image.src} alt={""}/>
                    </div>
                ))
            }
        </div>
        <div className={"gallery-column"}>
            {
                props.files3.map((image) => (
                    <div className={"img-gallery-div"}>
                        <img className={"gallery-img"} src={image.src} alt={""}/>
                    </div>
                ))
            }
        </div>
        <div className={"gallery-column"}>
            {
                props.files4.map((image) => (
                    <div className={"img-gallery-div"}>
                        <img className={"gallery-img"} src={image.src} alt={""}/>
                    </div>
                ))
            }
        </div>

    </div>
}
export default Gallery