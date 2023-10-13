import React from "react";
import {useFormik} from 'formik';
import { useAddhospitalByIdMutation, useLazyGethospitalByNameQuery } from "../services/hdataservice";

const Hadd = () => {
    const [addhFn] = useAddhospitalByIdMutation();
    const [rFn] = useLazyGethospitalByNameQuery();
    const haddForm = useFormik({
        initialValues : {
            "name" : "",
            "address" : "",
            "image" : "",
            "price" : "",
            "contact" : ""
        },
        onSubmit : (values)=>{
            console.log(values);
            addhFn(values).then(()=>{
                alert("Hospital successfully added...!");
                rFn();
            })
            
            
        }
    });
    return(
        <div className="add-hospital">
            <h1>Add Hospitals</h1>
            <form onSubmit={haddForm.handleSubmit}>
                <input type="text" placeholder="Hospital Name" name="name" onChange={haddForm.handleChange} onBlur={haddForm.handleBlur}></input><br/>
                <input type="text" placeholder="Hospital Address " name="address" onChange={haddForm.handleChange} onBlur={haddForm.handleBlur}></input><br/>
                <input type="text" placeholder="image url " name="image" onChange={haddForm.handleChange} onBlur={haddForm.handleBlur}></input><br/>
                <input type="text" placeholder="price-range" name="price" onChange={haddForm.handleChange} onBlur={haddForm.handleBlur}></input><br/>
                <input type="text" placeholder="contact-details" name="contact" onChange={haddForm.handleChange} onBlur={haddForm.handleBlur}></input><br/>
                <button>Add Product</button>
            </form>
        </div>
    )
}

export default Hadd;