import React from "react";
import { useGetcarouselimgByNameQuery } from "./services/hdataservice";

const Home = () =>{
    // const {data,isLoading} = useGetcarouselimgByNameQuery()
    return(
        // Carousel
        <div id="demo" className="carousel slide" data-bs-ride="carousel">
            <h1>welcome to VcareU consulations</h1>
        </div>
  
        
    )
}

export default Home;