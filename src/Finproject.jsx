import React from "react";
import Project1 from "./project1.jpg";
import Project2 from "./project2.jpg";
import Project3 from "./project3.jpg";
import Project4 from "./project4.jpg";
import Project5 from "./project5.jpg";
function Finproject()
{
    return(
        <>
        <div className="container-fluid" id="project">
            <h2 id="projecthre"> Our Finished Projects</h2>
            <p id="projectto"> View some of our finished projects created by our staffs <br/>
             displayed here
           </p>
            </div>
            <br/>
            <br/>
            <br/>
            <img src={Project1} id="prjt1"/>
            <img src={Project2} id="prjt2"/>
            <img src={Project3} id="prjt3"/>
            <br/>
            <img src={Project4} id="prjt4"/>
            <img src={Project5} id="prjt5"/>
            <br/>
            <br/>
            <br/>
           <center> <button className="btn btn-lg" style={{color:"white",backgroundColor:"rgba(115,112,216,1)"}}> VIEW ALL</button> </center>
        </>
    );
}

export default Finproject;