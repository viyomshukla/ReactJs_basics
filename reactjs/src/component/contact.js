import React from "react";
import { NavLink, Outlet } from "react-router-dom";
function contact(){
    return(
        <>
        <div>
            <h1>Welcome to contact</h1>
        </div>
        <nav className="child">
            <NavLink to ='owner'>owner</NavLink>
            <NavLink to ='/contact/director'>director</NavLink>
        </nav>
        <Outlet></Outlet>
        </>
    )
}
export default contact;