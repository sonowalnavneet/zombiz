import React from "react";
import Consultency from "./consultency.png";
import Grow from "./grow.png";
import Support from "./support.png"
function Contents()
{
    return(
        <>
              <div className="card-group">
  <div className="card">
    <div className="card-body text-center">
      <p className="card-text" id="aaf"> 
      <img src={Consultency}/>
      <br/>
      <br/>
      <h4 style={{fontFamily:'Playfair Display',color:"black"}}> Business Consultancy</h4>
      <br/>
     We provide our clients quality advices <br/>
         which help them make their <br/>
         business gain profit 
          
      </p>
      <br/>
      <br/>
    </div>
  </div>
  <div className="card">
    <div className="card-body text-center">
      <p className="card-text" id="aaf">
        <img src={Grow}/>
        <br/>
        <br/>
        
        <h4 style={{fontFamily:'Playfair Display',color:"black"}}> Help To Grow Business</h4>
        <br/>
        We help our clients grow their business<br/>
         Our advisor teams give execellent advices <br/>
         which help our clients.
        </p>
        <br/>
        <br/>
    </div>
  </div>
  <div className="card">
    <div className="card-body text-center">
      <p className="card-text" id="aaf"> 
      <img src={Support}/>
      <br/>
      <br/>
      <h4 style={{fontFamily:'Playfair Display',color:"black"}}> Great Support</h4>
      <br/>
       We provide quality support to our <br/>
      clients in solving their problems <br/>
       and giving advices.
      </p>
      <br/>
      <br/>
    </div>
  </div>

</div>

        </>
    );
}

export default Contents;