import React from "react";
import { Link } from "react-router-dom";
import "./style.scss";

const Navigation = ()=>{
  return(
    <header>
         <nav >
      <ul className="navigation" >
        <li><Link to="/" >Home</Link></li>
        <li><Link to='/playlist'>PlayList</Link></li>
      </ul>
    </nav>
    </header>
  )
}

export default Navigation;