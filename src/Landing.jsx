import React from "react";
import Hprofiles from "./homepage/Hprofiles";
import { Link, Outlet } from 'react-router-dom'

function Landing(){
    return(
    <div id="container">
      <div className="header bg-dark ">
        <ul className="nav">
          <li className="nav-item">
            <Link to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link to="/hprofiles">Our services</Link>
          </li>
          <li className="nav-item">
          <Link to="/admin">DashBoard</Link>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Services</a>
          </li>
          <li className="nav-item">
            <a className="nav-link disabled" href="#">Disabled</a>
          </li>
        </ul>
      </div>

      <div id="container-body">
          {/* <Hprofiles/> */}
          <Outlet/>
      </div>
      {/* <footer id="container-footer">
          <p>Footer Text</p>
      </footer>    */}
    </div>

    )
}

export default Landing;