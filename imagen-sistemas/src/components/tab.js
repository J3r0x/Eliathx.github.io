import "../styles/tab.css";
import {NavLink} from "react-router-dom";
import React from "react";

/*import $ from "jquery"
(
    $(".subnav-content").on("mouseover", function() {
        $(".bottom-border").css("box-shadow"," 0 3px 2px -2px #1d1d1f");
    }).on("mouseout", function() {
        $(".bottom-border").css("background-color","yellow");
    })
)*/
const arrow = <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                   className="chevron-down" viewBox="0 0 16 16">
    <path fillRule="evenodd"
          d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
</svg>

function Tab(props) {
    return <li className="tab ">
        <div className={"bottom-border"}>
            <NavLink to={props.pageLink}><a style={{textTransform:"uppercase"}}> {props.page}</a></NavLink>
        </div>
    </li>
}


export {Tab, arrow};