import React, { useState } from "react";
// import {useFormik} from 'formik';
import { Formik } from "formik";
import { useAddhospitalByIdMutation, useLazyGethospitalByNameQuery } from "../services/hdataservice";
import { bedtypes } from "../bedtypes";

const Hadd = () => {
    // debugger
    const [addhFn] = useAddhospitalByIdMutation();
    const [rFn] = useLazyGethospitalByNameQuery();
    const [newbedtypes , setNewbedtypes] = useState([])
    const [newbedtype, setNewbedtype] = useState(
        {
            bedtype : '',
            bedprice : 0
        }
    );
    

    function addedBedType(){
        // debugger
        newbedtype && setNewbedtypes([...newbedtypes, newbedtype]);
        console.log(newbedtypes);
        // console.log("addedBedType from form values" , value)
    }

    return(
        <div className="add-hospital" style={{border:'1px solid darkgray', padding:'10px'}}>
            <h1>Add Hospitals</h1>
            {/* <form onSubmit={haddForm.handleSubmit}>
                <input type="text" placeholder="Hospital Name" name="name" onChange={haddForm.handleChange} onBlur={haddForm.handleBlur}></input><br/><br/>
                <input type="text" placeholder="Hospital Address " name="address" onChange={haddForm.handleChange} onBlur={haddForm.handleBlur}></input><br/><br/>
                <input type="text" placeholder="image url " name="image" onChange={haddForm.handleChange} onBlur={haddForm.handleBlur}></input><br/><br/>
                <input type="text" placeholder="price-range" name="price" onChange={haddForm.handleChange} onBlur={haddForm.handleBlur}></input><br/><br/>
                <input type="text" placeholder="contact-details" name="contact" onChange={haddForm.handleChange} onBlur={haddForm.handleBlur}></input><br/><br/>
                <button className="bedtype" onClick={()=>{bedTypeSelection()}}>Add BedTypes</button>

                Button trigger modal
                <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                    Bed Type
                </button><br/>

                Modal
                <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog">
                        <div class="modal-content">
                        <div class="modal-header">
                            <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                        <select name="bedtype" id="bedtype">
                            <option selected disabled>please select Bed Type</option>
                            {
                                bedtypes.map(bedtype=>{
                                    return(<option value={bedtype}>{bedtype}</option>)
                                })
                            }
                        </select>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" class="btn btn-primary" data-bs-dismiss="modal" onClick={()=>selectedBedType()}>Submit</button>
                        </div>
                        </div>
                    </div>
                </div>
                <br/>
                <button>Add Hospital</button>
            </form> */}

            {/* Directly using Fomik Component */}

            <Formik
                initialValues={
                    { 
                        name: '', 
                        image: '',
                        address : '',
                        reviews : [],
                        bedTypes : [],
                        beds : [],
                        contact : ""

                    }
                }
                onSubmit={(values)=>{
                    values.bedTypes = [...newbedtypes];
                    addhFn(values).then((res)=>{
                        alert("Added successfully...");
                    });
                    rFn();
                    console.log("new hospital", values)
                    console.log(newbedtypes)
                }}
            >
                {({
                    values,
                    errors,
                    touched,
                    handleChange,
                    handleBlur,
                    handleSubmit,
                    isSubmitting,
                    /* and other goodies */
                }) => (
                    <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        name="name"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.name}
                        placeholder="Enter hname"
                    />
                    <br/>
                    <input
                        type="text"
                        name="image"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.image}
                        placeholder="Enter himage"
                    />
                    <br/>
                    <input
                        type="text"
                        name="address"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.address}
                        placeholder="Enter haddress"
                    /><br/>
                    <br/>
                    {
                        newbedtypes.length > 0 && (<u>Selected BedTypes</u>)
                    }
                    {
                        newbedtypes.length > 0 && newbedtypes.map(list=>{
                            return(
                                <li>
                                    <i>{list.bedtype}</i>&nbsp;
                                    <b>{list.bedprice}</b>
                                </li>
                            )
                        })
                    }
                    <br/>

                {/* Button trigger modal */}
                <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                    Add Bed Type
                </button><br/>

                {/* Modal */}
                <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog">
                        <div class="modal-content">
                        <div class="modal-header">
                            <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                        <select name="bedtype" id="bedtype" onChange={(e)=>{setNewbedtype({...newbedtype , bedtype:e.target.value})}}>
                            <option value={null} selected disabled>please select Bed Type</option>
                            {
                                bedtypes.map(bedtype=>{
                                    return(<option value={bedtype}>{bedtype}</option>)
                                })
                            }
                        </select>
                        <input type="text" placeholder="Enter BedPrice" onChange={(e)=>{setNewbedtype({...newbedtype , bedprice:e.target.value})}}></input>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" class="btn btn-primary" data-bs-dismiss="modal" onClick={()=>addedBedType(values)}>Added Bedtype</button>
                        </div>
                        </div>
                    </div>
                </div><br/>
                <button type="submit">
                    Submit
                </button>
                </form>
                )}
            </Formik>
        </div>
    )
}

export default Hadd;