import React from "react";
import { useGetcarouselimgByNameQuery } from "./services/hdataservice";

const Home = () =>{
    const {data,isLoading} = useGetcarouselimgByNameQuery()
    return(
        // Carousel
        <div id="demo" class="carousel slide" data-bs-ride="carousel">
            {/* Indicators/dots */}
            {/* <div class="carousel-indicators">
            <ul id="ul-carousel">
            {
                isLoading && <img src="https://i.pinimg.com/originals/8b/34/b0/8b34b0ba0e40ad966d14ef1bdf63d3db.gif" alt=""/>
            }
           
            { 
                data && data.map((carousel,index)=>{
                    return(

                        <button type="button" data-bs-target="#demo" data-bs-slide-to={carousel.index} class="active"></button>
                    )
                })
            }
            </ul>
            </div> */}
        </div>
  
        
    )
}

export default Home;