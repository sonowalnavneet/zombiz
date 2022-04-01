import React from "react"; //React module: module means a part of code
import "./index.css";
import Navneetnav from "./Navneetnav";
import Contents from "./Contents";
import Aboutus from "./Aboutus";
import Services from "./Services";
import Finproject from "./Finproject";
import Expert from "./Expert";
import Pricing from "./Pricing";
import Clientpart from "./Clientpart";
import News from "./News";
import Consult from "./Consult";
import Do from "./Do";
import Stastistics from "./Statistics";
import {Route,Switch} from "react-router-dom";
import Navbar from "./Navbar";
import Carousel from "./Carousel";
import Header from "./Header";

function App() {
  return (
   <>
     
       <Navneetnav/>
      <Consult/>
           <Do/>
           <Contents/>
           <Aboutus/>
           <Services/>
           <Stastistics/>
           <Finproject/>
           <Expert/>
           <Pricing/>
           <Clientpart/>
           <News/>
   </>
    
  );
}

export default App;
