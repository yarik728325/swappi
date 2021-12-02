import React from "react";
import { NavLink } from "react-router-dom";
import "./style.scss";

const Navigation = ()=>{
  return(
  <header>
    <nav >
      <ul className="navigation" >
        <li><NavLink to="/swappi" >Home</NavLink></li>
      </ul>
    </nav>
  </header>
  )
}

export default Navigation;