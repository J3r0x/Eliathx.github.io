import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Header from "../components/header";
import Slideshow from "../components/slideshow";
import QuienesSomos from "./quienesSomos";
import ClubesBoard from "../components/ClubesBoard";
import Footer from "../components/Footer";
import React from "react";
import EventsMain from "./events/eventsMain";
const Home=()=>{
    return <div>
        <Slideshow/>
        <ClubesBoard/>

    </div>
}
export default Home