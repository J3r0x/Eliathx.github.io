import "../styles/header.css"
import {arrow, Tab} from "./tab";
import {Routes, Route, NavLink} from 'react-router-dom';
import React from "react";

function Header() {
    return <div className="header">


        <div className="logo-div">
            {/* TODO: Agregar logo de Imagen Sistemas */}
            <img className="logo-img"
                 src="https://cdn.discordapp.com/attachments/751882434705883207/1033894211122122852/unknown.png"
                 alt="IMG-SIS"/>
        </div>
        <div className="navigation-bar">
            <Tab page="Contacto" pageLink="Contacto"/>

            {/*TODO: Create component from array */}

            <div className="subnav tab">
                <div className={"bottom-border "}>CLUBES {arrow}</div>
                <div className="subnav-content">
                    <a className="subnav-element">SOFTWARE</a>
                    <a className="subnav-element">INTELIGENCIA ARTIFICIAL</a>
                    <a className="subnav-element">CIENCIA DE DATOS</a>
                    <a className="subnav-element">CYBERSEGURIDAD</a>
                </div>
            </div>

            <div className="subnav tab">
                <div className={"bottom-border "}>SERVICIOS {arrow}</div>
                <div className="subnav-content">
                    <a className="subnav-element">DIRECTORIO FIS</a>
                    <a className="subnav-element">USO DE EXTINTORES </a>
                    <Tab page={"Biblioteca"} pageLink="Biblioteca"/>
                    <a className="subnav-element">OTROS</a>
                </div>
            </div>

            <div className="subnav tab">
                <div className={"bottom-border "}>
                    <NavLink to="/Eventos">EVENTOS {arrow}</NavLink>
                </div>
                <div className="subnav-content">
                    <Tab page="Casas Abiertas" pageLink="CasasAbiertas"/>
                    <a className="subnav-element">COMPETENCIAS</a>
                    <a className="subnav-element">SOCIALES</a>
                    <a className="subnav-element">JISIC</a>
                    <a className="subnav-element">ICI2ST</a>

                </div>
            </div>

            <Tab page="Quienes Somos" pageLink="/QuienesSomos"/>
            <Tab page="Inicio" pageLink="/"/>

        </div>

    </div>
}

export default Header;