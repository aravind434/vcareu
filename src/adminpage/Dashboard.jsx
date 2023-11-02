import React from "react";
import { Link, Outlet } from "react-router-dom";

const Dashboard = () => {
    return(
        <div className="adminpage d-flex justify-content-evenly" >
            <ul className="nav flex-column" style={{width:"20%"}}>
                <li className="nav-item addhsptl-link">
                    <Link className="nav-link active" aria-current="page" to="add-hospital" aria-selected="true">Add Hospital</Link>
                </li>
                <li className="nav-item addbeds-link">
                    <Link className="nav-link" to="add-beds">Add Beds</Link>
                </li>
                {/* <li className="nav-item">
                    <a className="nav-link disabled" href="#" tabIndex="-1" aria-disabled="true">Disabled</a>
                </li> */}
            </ul>
            <div className="dashboard-addhospital row align-items-center" style={{width:"75%"}}>
                <Outlet/>
            </div>
        </div>
    )
}

export default Dashboard;