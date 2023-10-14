import React from "react";
import { useGethospitalByNameQuery, useLazyGethospitalByNameQuery } from "../services/hdataservice";
import { Link, useNavigate } from "react-router-dom";

function Hprofiles(){
    let {data, isLoading} = useGethospitalByNameQuery();
    let [fn] = useLazyGethospitalByNameQuery();
    const navigate = useNavigate();

    const seeMore = (id) =>{
        navigate(`/hdetails/${id}`)
    }
    return(
        <div className="container hprofiles">
            <h1 className="text-center">List of available Hospitals</h1>
            <ul id="hprofile">
            {
                isLoading && <img src="https://i.pinimg.com/originals/8b/34/b0/8b34b0ba0e40ad966d14ef1bdf63d3db.gif" alt=""/>
            }
           
            { 
                data && data.map(hospital=>{
                    return(
                            <li id="hlist">
                                <h4 className="text-center Hname">{hospital.name.toUpperCase()}</h4>
                                <div className="img-parent">
                                    <img src={hospital.image} alt=""/>
                                </div><br/>
                                <li>
                                    <div className="Hbeds">
                                        <b>Total Beds: </b><br/>
                                        {/* <span ><b className="text-primary">A/C Beds: </b>{hospital.beds.ac}</span><br/>
                                        <span ><b className="text-warning">General Beds: </b>{hospital.beds.general}</span> */}
                                    </div>
                                    <p className="Haddress"><b>Address:</b>{hospital.address}</p>
                                    <span className="Hrating"><b>rating: </b>{hospital.rating}</span> <br/>
                                    <Link className="text-primary" onClick={()=>{seeMore(hospital.id)}}>see more...</Link> 
                                </li>
                                
                                
                            
                            {/* {hospital.address} */}
                            {/* <button onClick={()=>{deleteProduct(product.id)}}>DELETE</button> */}
                            {/* <button onClick={()=>{fn(product.id)}}>DELETE</button> */}
                            {/* <i className='delete bi bi-trash3' onClick={()=>{deleteProduct(product.id)}}></i>
                            <i className='edit bi bi-pencil-square' onClick={()=>{editProduct(product.id)}}></i> */}
                            </li>
                        
                    )
                })
                
            }
            </ul>
        </div>
    )
}

export default Hprofiles;