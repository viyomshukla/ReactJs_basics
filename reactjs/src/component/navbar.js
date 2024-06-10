import React from "react";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
function Navbar(){
    return(
        <>
        <nav>
            <h1>LINK</h1>
            <Link to ='/'>Home</Link>
            <Link to='/about'>About</Link>
            <Link to='/contact'>Contact</Link>
            </nav>
            <br/><br/>

            <nav>
            <h1>NAVLINK</h1>
            <NavLink to='/'>Home</NavLink>
            <NavLink to='/about'>About</NavLink>
            <NavLink to='/contact'>Contact</NavLink>
            </nav>
            </>
    )
}
export default Navbar;
