import React, { useEffect, useState } from "react";
import { useAddbedsMutation, useGethospitalByNameQuery, useGethospitaldetailsByIdQuery, useLazyGethospitaldetailsByIdQuery } from "../services/hdataservice";
import { useParams } from "react-router-dom";
import _ from 'lodash';

//firebase
import { getAuth,signInWithPopup, GoogleAuthProvider } from "firebase/auth";
// import { auth } from '../../firebase';
const provider = new GoogleAuthProvider();

const Bookappointment = ()=>{
    var {hid} = useParams();
    var {isLoading, data} = useGethospitaldetailsByIdQuery(hid);
    var [updatebedsfn] = useAddbedsMutation();
    var [getBookedhsptlDetails] = useLazyGethospitaldetailsByIdQuery();
    var [bedscategory, setbedscategory] = useState(null);
    var [beds , setbeds] = useState([]);
    var [selectedbedId, setselectedbedId] = useState(-1);
    
    useEffect(()=>{
        if(data){
            var bedsByCategory =  _.groupBy(data.beds, "bedtype");
            setbedscategory(bedsByCategory);
            console.log("bedscategories",bedsByCategory);
            var temp = [];
            for(var bed in bedsByCategory){
                temp.push(bed);
            }
            setbeds([...temp]);
            console.log("categorize" , beds);
        }

    },[data]);
    console.log("hid", hid);
    console.log("seleceted hsptl" , data);

    //selecting the beds
    function selectBed(bid){
        setselectedbedId(bid);
        console.log("bid::" , bid);
        var tempbeds = data.beds;
        console.log("tempbeds::", tempbeds);

        //updating the bed status::
        tempbeds = tempbeds.map((bed)=>{
            if(bed.bedid === bid){
                return{...bed, bedstatus:'booked'}
            }
            else 
            {
                return bed
            }
        })
        // console.log("updatedbed status", tempbeds);
        // data = {...data, beds:[...tempbeds]};
        // console.log("tempbeds data" , data);
        var bedsByCategory =  _.groupBy(tempbeds, "bedtype");
        setbedscategory(bedsByCategory);

        
    }
    function bookBeds(){
        const auth = getAuth();
        signInWithPopup(auth,provider)
            .then((result) => {
                const credential = GoogleAuthProvider.credentialFromResult(result);
                const token = credential.accessToken;
                const user = result.user;
                // console.log(token);

            var temp = Object.values(bedscategory).flat(1);
            temp = temp.map((bed)=>{
                if(bed.bedid === selectedbedId){
                    return {...bed, patients:[...bed.patients, {useremail:user.email,token:user.accessToken}]}
                }
                else{
                    return bed
                }
            })
            data = {...data, beds:[...temp]};
            updatebedsfn(data).then(()=>{
                alert("booked successfully...");
                getBookedhsptlDetails(hid);
            })
        }).catch((error) => {
            console.log(error)
        });
            // console.log("bookbeds", data)
        }

    return(
        <div className="container bookappointment">
            <h1>Book the appointment</h1>
            {
                isLoading && <img src="https://i.pinimg.com/originals/8b/34/b0/8b34b0ba0e40ad966d14ef1bdf63d3db.gif" alt=""/>
            }
            {
               data && ( 
               <div>
                    <h1>{data?.name.toUpperCase()}</h1>
                    <ul>
                        {
                            // data.bedTypes.map((bedType)=>{
                            //     console.log("bedTypes" , bedType);
                            //     return <li>{bedType.bedtype} - {([data.beds[bedType.bedtype]]).length}</li>
                            // })
                            beds.map((bed)=>{
                                return <li>
                                    {bed} - {bedscategory[bed].length}
                                    <br/>
                                    {
                                        bedscategory[bed].map((bed)=>{
                                            return(
                                                <>
                                                    {bed.bedstatus==='open' && <i class="bi bi-clipboard h5 m-1" onClick={()=>{selectBed(bed.bedid)}}></i>}
                                                    {bed.bedstatus==='booked' && <i class="bi bi-clipboard-fill h5 m-1"></i>}
                                                </>
                                            ) 
                                        })
                                    }
                                </li>
                            })
                        }
                    </ul>
                    <button onClick={()=>{bookBeds()}}>Bookappointment</button>
                </div>
                )

            }

        </div>
    )
}

export default Bookappointment;