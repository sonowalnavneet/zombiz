import React from "react";
import { NavLink } from "react-router-dom";
import Navlogo from "./navlogo.png";

function Navneetnav() {
  return (


    <>
    
    <nav className="navbar navbar-expand-sm" id="navbar" style={{backgroundColor:"rgba(115,112,216,1)"}}>
          <img src={Navlogo} id="navlogodiv"/>
       <div className="container-fluid">
         <ul className="navbar-nav">
         <li className="nav-item">
          <a className="nav-link" style={{color:"white"}} href="#" id="home">Home </a>
         </li>
        <li className="nav-item">
          <a className="nav-link" style={{color:"white"}} href="#"> About</a>
         </li>
         <li className="nav-item">
        <a className="nav-link" style={{color:"white"}} href="#"> Service</a>
         </li>
         <li className="nav-item">
        <a className="nav-link" style={{color:"white"}} href="#"> Project</a>
         </li>
         <li className="nav-item">
        <a className="nav-link" style={{color:"white"}} href="#"> Team</a>
         </li>
         <li className="nav-item">
        <a className="nav-link" style={{color:"white"}} href="#"> Blog</a>
         </li>
         <li className="nav-item">
        <a className="nav-link" style={{color:"white"}} href="#"> Contact</a>
         </li>
         <li className="nav-item">
        <a className="nav-link" style={{color:"white"}} href="#"><img src= "https://img.icons8.com/external-kiranshastry-lineal-kiranshastry/344/external-shopping-cart-interface-kiranshastry-lineal-kiranshastry-1.png" height="20px"/></a>
         
         </li>
         <li className="nav-item">
        <a className="nav-link" style={{color:"white"}} href="#"> <img src="https://img.icons8.com/external-royyan-wijaya-detailed-outline-royyan-wijaya/344/external-magnifying-glass-interface-royyan-wijaya-detailed-outline-royyan-wijaya.png" height="20px"/> </a>
        </li>
        </ul>
       </div>  

       </nav>
    </>
  );
}

export default Navneetnav;