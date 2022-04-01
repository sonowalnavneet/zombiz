import React from "react";
import Team3 from "./team3.jpg";
import Team2 from "./team2.jpg";
import Team from "./team.jpg";


function Expert()
{
    return(
        <>
        <br/>
        <br/>
        <br/>
        <br/>
        <div  id="expertone">
            <h2 id="expertwo" style={{color:"#fff"}}> Our Expert Team</h2>
            <br/>
            <p id="experthre" style={{color:"#fff"}}> The gentlemen behind the success of this  <br/>
            company</p>
            
           
            <div className="card-group">
            <div className="card" id="expertcard" style={{backgroundColor:"rgba(115,112,216,1)"}}>
            <div className="card-body text-center">
            <p className="card-text" id="aaf"> 
               <img src={Team2} height="300px" width="240px"/>  
                <h3 style={{color:"white",backgroundColor:"rgba(115,112,216,1)"}}>darren j. stevens</h3>
                <p style={{color:"white"}}> Director , Finance Solution </p>
             </p>
             </div>   
             </div>
             <div className="card" id="" style={{backgroundColor:"rgba(115,112,216,1)"}}>
            <div className="card-body text-center">
            <p className="card-text" id="aaf"> 
               <img src={Team3} height="300px" width="240px"/>  
                <h3 style={{color:"white",backgroundColor:"rgba(115,112,216,1)"}}> Kevin Thomson</h3>
                <p style={{color:"white"}}> Health, Legal Advising </p>
             </p>
             </div>   
             </div>
             <div className="card" id="" style={{backgroundColor:"rgba(115,112,216,1)"}}>
            <div className="card-body text-center">
            <p className="card-text" id="aaf"> 
               <img src={Team} height="300px" width="240px"/>  
                <h3 style={{color:"white",backgroundColor:"rgba(115,112,216,1)"}}> Tom Hanks</h3>
                <p style={{color:"white"}}> Founder & CEO </p>
             </p>
             </div>   
             </div>
             <div className="card" id="" style={{backgroundColor:"rgba(115,112,216,1)"}}>
            <div className="card-body text-center">
            <p className="card-text" id="aaf"> 
               <img src={Team3} height="300px" width="240px"/>  
                <h3 style={{color:"white",backgroundColor:"rgba(115,112,216,1)"}}> Alex Browne</h3>
               <p style={{color:"white"}}> Director , Management & Research </p>
             </p>
             </div>   
             </div>
             </div>
             </div>
        </>
        );
        }

       export default Expert;