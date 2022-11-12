import React from "react";
import "../../styles/eventsMain.css"
const EventsMain = () => {
    return (
        <div className="page" >
            <h1 className={"center-title"}>Eventos</h1>
          <div style={{display: "flex", margin: "10px 40px 40px 40px"}}>
              <EventsCard title={"Casas abiertas"} img={"https://imagenfis.epn.edu.ec/images/casas-abiertas/2014/20141202_093559.jpg"}/>
              <EventsCard title={"Competencias"} img={"https://imagenfis.epn.edu.ec/images/casas-abiertas/2014/20141202_093512.jpg"}/>
              <EventsCard title={"Sociales"} img={"https://imagenfis.epn.edu.ec/images/casas-abiertas/2014/Afiche_casa_abierta_2014.png"}/>
              <EventsCard title={"JISIC"} img={"https://imagenfis.epn.edu.ec/images/casas-abiertas/2014/20141202_093629.jpg"}/>
              <EventsCard title={"ICI2ST"} img={"https://imagenfis.epn.edu.ec/images/casas-abiertas/2014/20141202_093520.jpg"}/>
          </div>
        </div>
    );

};
const EventsCard = (props) =>{
    return <div className={"events-card-container"}>
            <img className={"events-card-img"} src={props.img} alt={""}/>
        <div className={"events-card-title"}>{props.title}</div>
    </div>
}

export default EventsMain;