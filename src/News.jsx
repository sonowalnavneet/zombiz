import React from "react";
import Card1 from "./card1.jpg";
import Card2 from "./card2.jpg";
import Card3 from "./card3.jpg";

function News()
{
    return(
      <>
     <div id="newsdivisiondiv"> 
      <center> <h2 style={{fontFamily:"'Playfair'"}}> Our Latest News</h2>
      <br/>
      <p id="newsparagraph"> Read our latest  news and  business-related articles here  </p>
   
      </center>
      <br/>
      <br/>
      
      <div className="card" style={{width:"400px",border:"5px solid aliceblue"}}>
         <img src={Card1} style={{height:"300px", width:"385px"}}/>
         <p id="newsparagraph1">
      The Pros And Cons Of Starting An Online <br/>
      Consulting Business
      <br/>
      Posted By: <a href="#"> Mick Steven </a> // On <a href="#">12th June, 2045 </a></p>
      </div>
      <br/>


     <div className="card" id="newcard"style={{width:"400px",border:"5px solid aliceblue",marginLeft:"500px",bottom:"410px"}}>
      <img src={Card2} style={{height:"300px", width:"385px"}}/>
         <p id="newsparagraph1">
         8 Secrets For Your Successful Business <br/> 
         Mentor Won't Tell You 
      <br/>
      Posted By: <a href="#"> Mick Steven </a> // On <a href="#">12th June, 2045 </a></p>
      </div>
       
      <div className="card" id="newcard1"style={{width:"400px",border:"5px solid aliceblue",marginLeft:"1000px",bottom:"800px"}}>
      <img src={Card3} style={{height:"300px", width:"385px"}}/>
         <p id="newsparagraph1">
         8 Secrets For Your Successful Business <br/> 
         Mentor Won't Tell You 
      
      <br/>
      Posted By: <a href="#"> Mick Steven </a> // On <a href="#">12th June, 2045 </a></p>
     
     </div>
     <center>  <button className="btn btn-lg" id="newbtn" style={{color:"white",backgroundColor:"rgba(115,112,216,1)",width:"170px",fontFamily:"sans-serif"}}>  READ MORE</button></center>
      
      </div>
      </>
    );
}

export default News;