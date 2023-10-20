import React from "react";
import { Link, Outlet } from "react-router-dom";

const Dashboard = () => {
    return(
        <div className="adminpage d-flex">
            <ul className="nav flex-column w-25">
                <li className="nav-item">
                    <Link className="nav-link active bg-success" aria-current="page" to="add-hospital">Add Hospital</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="add-beds">Add Beds</Link>
                </li>
                {/* <li className="nav-item">
                    <a className="nav-link disabled" href="#" tabIndex="-1" aria-disabled="true">Disabled</a>
                </li> */}
            </ul>
            <div className="dashboard-addhospital row align-items-center w-75 ">
                <Outlet/>
            </div>
        </div>
    )
}

export default Dashboard;