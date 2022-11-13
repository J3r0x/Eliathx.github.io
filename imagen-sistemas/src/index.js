import React from "react";
import ReactDOM from "react-dom/client"
import "./styles/index.css"
import Header from "./components/header";
import Slideshow from "./components/slideshow";
import QuienesSomos from "./pages/quienesSomos";
import Footer from "./components/Footer";
import "./styles/scrollbar.css";
import ClubesBoard from "./components/ClubesBoard";

import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from "./pages/Home";
import EventsMain from "./pages/events/eventsMain";
import Contacto from "./pages/Contacto";
import Biblioteca from "./pages/Biblioteca";
import CasaAbierta from "./pages/events/CasaAbierta";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
    <BrowserRouter>
        <Header/>
           <Routes>
               <Route path="/" element={<Home/>}/>
               <Route path="/CasasAbiertas" element={<CasaAbierta/>}/>
               <Route path="/QuienesSomos" element={<QuienesSomos/>}/>
               <Route path="/Eventos" element={<EventsMain/>}/>
               <Route path="/Contacto" element={<Contacto/>}/>
                <Route path={"/Biblioteca"} element={<Biblioteca/>}/>
           </Routes>
        <Footer/>
    </BrowserRouter>
)

