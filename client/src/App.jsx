import React from "react";
import { Outlet } from "react-router-dom";
import Nav from "./components/nav/nav";
import "./App.css";
import Footer from "./components/footer/footer";
// import Footer from "./components/footer/footer";

const App = () => {
  return (
    <div>
  
        <Nav />
    
         <div className="outlet"> <Outlet />  </div>
        <Footer/>
    </div>
  );
};

export default App;
