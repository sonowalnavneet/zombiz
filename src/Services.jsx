import React from "react";
import Service1 from "./service1.png";
import Service2 from "./service2.png";
import Service3 from "./service3.png";
import Service4 from "./service4.png";
import Service5 from "./service5.png";
import Service6 from "./service6.png";
function Services()
{
    return(
        <>
        <div className="container-fluid" id="services">
           <h2 id="srto"> Our Services</h2> <br/>
           <p id="srtoo">
            We provide quality services to our clients in low price, 
             available 24x7<br/>
           across the globe
            </p>
            <br/>
            <br/>
          <div className="card-group">
  <div className="card">
    <div className="card-body text-center">
      <p className="card-text" id="aaf"> 
      <img src={Service1}/>
      <br/>
      <br/>
      <h4 style={{fontFamily:'Playfair Display',color:"black"}}> Business Planning</h4>
      <br/>
     We help our clients plan their business <br/>
        to gain  profit and have <br/>
      a well planned business  <br/>
       <a href="#"> Learn more</a>
      </p>
      <br/>
      <br/>
    </div>
  </div>
  <div className="card">
    <div className="card-body text-center">
      <p className="card-text" id="aaf">
        <img src={Service2}/>
        <br/>
        <br/>
        
        <h4 style={{fontFamily:'Playfair Display',color:"black"}}>  Business Consultancy</h4>
        <br/>
        We provide our clients quality advices <br/>
         which help them make their <br/>
         business gain profit <br/>
       <a href="#"> Learn more</a>
        </p>
        <br/>
        <br/>
    </div>
  </div>
  <div className="card">
    <div className="card-body text-center">
      <p className="card-text" id="aaf"> 
      <img src={Service3}/>
      <br/>
      <br/>
      <h4 style={{fontFamily:'Playfair Display',color:"black"}}> Financial Services</h4>
      <br/>
      We provide clients our clients financial<br/>
      them support to help  <br/>
        complete their work. <br/>
       <a href="#"> Learn more</a>
      </p>
      <br/>
      <br/>
    </div>
  </div>
</div>
<br/>
<br/>
<br/>
<div className="card-group">
  <div className="card">
    <div className="card-body text-center">
      <p className="card-text" id="aaf"> 
      <img src={Service4}/>
      <br/>
      <br/>
      <h4 style={{fontFamily:'Playfair Display',color:"black"}}> Risk Management</h4>
      <br/>
      The services we provide to our<br/>
          clients are 100% risk free<br/>
          and are guranteed.<br/>
       <a href="#"> Learn more</a>
      </p>
      <br/>
      <br/>
    </div>
  </div>
  <div className="card">
    <div className="card-body text-center">
      <p className="card-text" id="aaf">
        <img src={Service5}/>
        <br/>
        <br/>
        
        <h4 style={{fontFamily:'Playfair Display',color:"black"}}>  Expert Advisers</h4>
        <br/>
        Our advisors provide professional<br/>
         advises which help our clients  <br/>
          grow their business.<br/>
       <a href="#"> Learn more</a>
        </p>
        <br/>
        <br/>
    </div>
  </div>
  <div className="card">
    <div className="card-body text-center">
      <p className="card-text" id="aaf"> 
      <img src={Service6}/>
      <br/>
      <br/>
      <h4 style={{fontFamily:'Playfair Display',color:"black"}}> 24/7 Customer Support</h4>
      <br/>
     As mentioned before, we provide <br/>
       our customers with 24/7 customer support <br/>
       so that they can solve their issues. <br/>
       <a href="#"> Learn more</a>
      </p>
      <br/>
      <br/>
    </div>
  </div>

</div>
</div>
   
        </>
    );
}

export default Services;