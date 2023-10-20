import React, { useEffect, useState } from "react";
import {useFormik} from 'formik';
import { useAddbedsMutation, useGethospitalByNameQuery } from "../services/hdataservice";

const Addbeds = () => {

    //Hooks
    var {isLoading:ishospitalloading, data:hospitals} = useGethospitalByNameQuery();
    var [selectedhospital, setselectedhospital] = useState(null);
    var [selectedhsptlbedtypes, setselectedhsptlbedtypes] = useState([]);
    var [selectedbedtype, setselectedbedtype] = useState();
    var [bedcount,setbedcount] = useState(0);
    var [bedprice,setbedprice] = useState(0);
    var [addbedsfn] = useAddbedsMutation()

    useEffect(()=>{
        console.log("updated with newbeds",selectedhospital);
    },[selectedhospital]);

    //To update the bedtypes and selectedhospital states
    function selectedHospital(hsptl) {
        
        setselectedhsptlbedtypes(JSON.parse(hsptl).bedTypes);
        setselectedhospital(JSON.parse(hsptl));
    }

    //beds obj creation and added to an array, update the state and passing the updated obj to server through hook function
    function addBeds(){
        debugger
        var newbeds = [];
        for(var i=0;i<=bedcount-1;i++){
            var newbed = {
                bedstatus:'open',
                bedtype:selectedbedtype,
                bedprice,
                patients : [],
                bedid: `${selectedbedtype+(i+1)}`
            }
            newbeds.push(newbed);
        }
        var latestdata = {...selectedhospital, beds:[...selectedhospital.beds,...newbeds]};
        setselectedhospital({...selectedhospital, beds:[...selectedhospital.beds,...newbeds]});
        addbedsfn(latestdata);

    }

    return(
        <div className="add-beds" style={{border:'1px solid darggray', padding:'10px'}}>
            <h1>Add beds to the selected hospital</h1>
            {
                ishospitalloading && <img src="https://i.pinimg.com/originals/8b/34/b0/8b34b0ba0e40ad966d14ef1bdf63d3db.gif" alt=""/>
            }
            {
                !ishospitalloading && (
                    <select onChange={(e)=>{selectedHospital(e.target.value)}}>
                        <option value={null}  disabled selected>Please select the hospital</option>
                        {
                            hospitals.map((hospital)=>{
                                return <option value={JSON.stringify(hospital)}>{hospital.name}</option>
                            })
                        }
                    </select>
                )
            }
            <br/>
            {
                selectedhsptlbedtypes.length>0 && (
                    <>
                        <select onChange={(e)=>{setselectedbedtype(e.target.value)}}>
                            <option value={null} disabled selected>Please select bedtype</option>
                            {
                            selectedhsptlbedtypes.map((bedType)=>
                                    <option value={bedType.bedtype}>{bedType.bedtype}</option>
                            ) 
                            }   
                        </select><br/>
                        <input type="number" placeholder="enter no.of beds" onChange={(e)=>{setbedcount(e.target.value)}}></input><br/>
                        <input type="number" placeholder="enter bed price" onChange={(e)=>{setbedprice(e.target.value)}}></input><br/>
                    </>
                )
            }
            <button onClick={()=>{addBeds()}}>Add Beds</button>
        </div>
    )
}

export default Addbeds;