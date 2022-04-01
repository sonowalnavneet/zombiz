import React from "react";
import Clientimg2 from "./clientimg2.jpg";
import Client3 from "./client3.png";
import Client4 from "./client4.png";
import Client5 from "./client5.png";
import Client1 from "./client1.png";
import Client2 from "./client2.png";
function Clientpart()
{
    return(
            <>
            <br/>
            <br/>
            <div id="clientpartdiv">
               <center> <h1 id="clientdiv1"> What Our Client Say About Us</h1> 
               <br/>
               <br/>
               <img  class="rounded-circle" src={Clientimg2} id="roundedimg"/> </center>
               <br/>
               <br/>
               <center>
                   <p id="colorparagraph"> Our clients enjoy services we offer and give a bright feedback. We are always happy to hear  <br/>
                    that our clients are satisfied with our services and support</p>
                    <br/>
                    <br/>
                    
                    <p id="colorparagraph1"> Kevin Watson</p> 
                    <p id="colorparagraph3"> CEO , Kingston</p>
               </center>
               <br/>
                <br/>
                <br/>
                </div>
               <div id="division">
                   <img src={Client3} id="imgg1"/>
                   <img src={Client4} id="imgg2"/>
                   <img src={Client5} id="imgg3"/>
                   <img src={Client1} id="imgg4"/>
                   <img src={Client2} id="imgg5"/>
                 
                   </div>
                   <br/>
                   <br/>
                   <br/>
            </>
    );
}

export default Clientpart;