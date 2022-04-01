import React from "react";
import Aboutimg from "./aboutimg.jpg";
function Aboutus()
{
    return(
        <>
        <div id="divisisonus" className="container-fluid" style={{backgroundColor:"aliceblue"}}>
            <h6  id="cntnr"> About us</h6>
            <br/>
            <p id="cntr2">
           One of the  leading companies <br/> 
           One of the best workplaces<br/>
           Friendly Boss and less work <br/>
           Offices with canteens, yoga rooms etc  <br/>
            Professional  staffs   and Managers
             <img src={Aboutimg} id="imga"/>
             
             <br/>
             <br/>
             <button class="btn btn-lg btn-primary"  style={{backgroundColor:"rgba(115,112,216,1)"}}> LEARN MORE </button>
            </p>
         
            </div>
        </>
    );
}

export default Aboutus;