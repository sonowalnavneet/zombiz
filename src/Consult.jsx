import React from "react";
import Newyork from "./newyork.jpg";
import Banner1 from "./banner1.jpg"
function Consult()
{
    return(
    <>
    <div id="divconsultone">
    <h2 style={{color:"azure",fontFamily:"'Playfair Display'",fontSize:"80px"}}> Consult Your <br/>
        Business With Us</h2>
    <br/>
    <p style={{color:"azure",fontSize:"24px"}}> We are the unique Consultancy Farm for your business solution, That is ready <br/>
    to take challenge and knockout your business problems.</p>
    <br/>
    <button className="btn btn-lg" id="button2" style={{color:"rgba(115,112,216,1)",backgroundColor:"white",width:"170px"}}> GET STARTED</button>
    <button className="btn btn-lg" id="button1" style={{color:"rgba(115,112,216,1)",backgroundColor:"white",width:"180px"}}> EXPLORE MORE</button>
    </div>
    </>
    );
}

export default Consult;