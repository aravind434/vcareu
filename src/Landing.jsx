import React from "react";
import Hprofiles from "./homepage/Hprofiles";
import { Link, Outlet } from 'react-router-dom'

function Landing(){
    return(
    <div id="container">
      {/* <div className="header bg-dark ">
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
      </div> */}

      {/* Boottrap Nav bar from Bootstrap */}

      <nav class="navbar navbar-expand-lg navbar-light bg-danger">
        <div class="container-fluid">
          {/* <a class="navbar-brand" href="#">Navbar</a> */}
          <Link class="navbar-brand" to="/">VcareU</Link>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                {/* <a class="nav-link active" aria-current="page" href="#">Home</a> */}
                <Link class="nav-link active" aria-current="page" to="/hprofiles">Our services</Link>
              </li>
              <li class="nav-item">
                {/* <a class="nav-link" href="#">Link</a> */}
                <Link class="nav-link" to="/admin">DashBoard</Link>
              </li>
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Dropdown
                </a>
                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li><a class="dropdown-item" href="#">Action</a></li>
                  <li><a class="dropdown-item" href="#">Another action</a></li>
                  <li><hr></hr></li>
                  <li><a class="dropdown-item" href="#">Something else here</a></li>
                </ul>
              </li>
              <li class="nav-item">
                <a class="nav-link disabled">Disabled</a>
              </li>
            </ul>
            <form class="d-flex">
              <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
              <button class="btn btn-outline-success" type="submit">Search</button>
            </form>
          </div>
        </div>
</nav>

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