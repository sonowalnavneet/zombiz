import React from "react";
import { NavLink } from "react-router-dom";
import Navlogo from "./navlogo.png";

function Navbar()
{
    return(
        <>
         <NavLink className="display-1" to="/"> Home </NavLink>
         <NavLink className="display-1" to="/do"> DO </NavLink>
         <NavLink className="display-1" to="/news"> About Us </NavLink>
       
        </>
    );
}

export default Navbar;