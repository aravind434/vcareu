import React from "react";
import { useGethospitaldetailsByIdQuery } from "../services/hdataservice";
import { Link, useParams } from "react-router-dom";


const Hdetails = () => {
    const {hid} = useParams()
    const {data, isLoading} = useGethospitaldetailsByIdQuery(hid);
    console.log("hospital details data",data)
    return(
        <div className="container hdetails">
            <div className="hdetails-header" style={{background: '#a6d2f8'}}>
                <img src="https://www.apollohospitals.com/wp-content/themes/apollohospitals/assets-v3/images/logo.svg" className="img-fluid" alt=""></img>  
            </div> <hr/>
            {
                <body className="hdetails-body">
                {/* <h1>{data?.hdetails.founder}</h1> */}
                <div>
                    <img className="img-fluid" src={data?.hdetails.founderimg} alt="not found the img"></img>
                </div>
                <div className="container ">
                    <div className="row" style={{background:'#EBFBFF',paddingTop:'10px'}}>
                        <div className="col col-6 col-md-6 left">
                            <h1>{data?.hdetails.htitle}</h1>
                            <p>{data?.hdetails.hcaption}</p>
                            <div className="row one">
                                <div className="col col-6 col-md-6 col-sm left">
                                    <div className="d-flex gap-4 py-2 pt-3">
                                        <div className="hcard-icon rounded h-25" style={{background:'#fff',boxShadow: '0px 0px 30px #bed9e0',height:'68px', width:'68px'}}>
                                            <img className="h-100 p-12" src={data?.hdetails.hcards[0].hcardicon} alt=""></img>
                                        </div>
                                        <div className="hcard">
                                            <h4 className="counter-holder">
                                                <span style={{color: '#007C9D', fontWeight: '600', fontSize: '29px'}}>{data?.hdetails.hcards[0].hcardcount}+</span>
                                            </h4>
                                            <p>{data?.hdetails.hcards[0].hcardtitle}</p>
                                        </div>
                                        
                                    </div>
                                </div>
                                <div className="col col-6 col-md-6 col-sm right">
                                    <div className="d-flex">
                                    <div className="d-flex gap-4 py-2 pt-3">
                                        <div className="hcard-icon rounded" style={{background:'#fff',boxShadow: '0px 0px 30px #bed9e0',height:'68%'}}>
                                            <img className="p-12" src={data?.hdetails.hcards[1].hcardicon} alt=""></img>
                                        </div>
                                        <div className="hcard">
                                            <h4 className="counter-holder">
                                                <span style={{color: '#007C9D', fontWeight: '600', fontSize: '29px'}}>{data?.hdetails.hcards[1].hcardcount}+</span>
                                            </h4>
                                            <p>{data?.hdetails.hcards[1].hcardtitle}</p>
                                        </div>
                                        
                                    </div>
                                    </div>
                                </div>
                            </div>

                            <div className="row two">
                                <div className="col col-6 col-md-6 left">
                                    <div className="d-flex gap-4 py-2 pt-3">
                                        <div className="hcard-icon rounded" style={{background:'#fff',boxShadow: '0px 0px 30px #bed9e0',height:'68px', width:'68px'}}>
                                            <img className="h-100 p-2" src={data?.hdetails.hcards[2].hcardicon} alt=""></img>
                                        </div>
                                        <div className="hcard">
                                            <h4 className="counter-holder">
                                                <span style={{color: '#007C9D', fontWeight: '600', fontSize: '29px'}}>{data?.hdetails.hcards[2].hcardcount}+</span>
                                            </h4>
                                            <p>{data?.hdetails.hcards[2].hcardtitle}</p>
                                        </div>
                                        
                                    </div>
                                </div>
                                <div className="col col-6 col-md-6 right">
                                    {/* <div className="d-flex"> */}
                                    <div className="d-flex gap-4 py-2 pt-3">
                                        <div className="hcard-icon rounded" style={{background:'#fff',boxShadow: '0px 0px 30px #bed9e0',height:'68px', width:'68px'}}>
                                            <img className="h-100 p-2" src={data?.hdetails.hcards[3].hcardicon} alt=""></img>
                                        </div>
                                        <div className="hcard">
                                            <h4 className="counter-holder">
                                                <span style={{color: '#007C9D', fontWeight: '600', fontSize: '29px'}}>{data?.hdetails.hcards[3].hcardcount}+</span>
                                            </h4>
                                            <p>{data?.hdetails.hcards[3].hcardtitle}</p>
                                        </div>
                                        
                                    </div>
                                    {/* </div> */}
                                </div>
                            </div>

                            <div className="row three">
                                <div className="col col-6 col-md-6 left">
                                    <div className="d-flex gap-4 py-2 pt-3">
                                        <div className="hcard-icon rounded" style={{background:'#fff',boxShadow: '0px 0px 30px #bed9e0',height:'68px', width:'68px'}}>
                                            <img className="p-2" src={data?.hdetails.hcards[4].hcardicon} alt="" style={{height:'68px', width:'68px'}}></img>
                                        </div>
                                        <div className="hcard">
                                            <h4 className="counter-holder">
                                                <span style={{color: '#007C9D', fontWeight: '600', fontSize: '29px'}}>{data?.hdetails.hcards[4].hcardcount}+</span>
                                            </h4>
                                            <p>{data?.hdetails.hcards[4].hcardtitle}</p>
                                        </div>
                                        
                                    </div>
                                </div>
                                <div className="col col-6 col-md-6 right">
                                    {/* <div className="d-flex"> */}
                                    <div className="d-flex gap-4 py-2 pt-3">
                                        <div className="hcard-icon rounded" style={{background:'#fff',boxShadow: '0px 0px 30px #bed9e0',height:'68px', width:'68px'}}>
                                            <img src={data?.hdetails.hcards[5].hcardicon} alt="" style={{height:'68px', width:'68px'}}></img>
                                        </div>
                                        <div className="hcard">
                                            <h4 className="counter-holder">
                                                <span style={{color: '#007C9D', fontWeight: '600', fontSize: '29px'}}>{data?.hdetails.hcards[5].hcardcount}+</span>
                                            </h4>
                                            <p>{data?.hdetails.hcards[5].hcardtitle}</p>
                                        </div>
                                        
                                    </div>
                                    {/* </div> */}
                                </div>   
                            </div>

                        </div>
                        <div className="col col-6 col-md-6 right">
                            <img className="img-fluid rounded" src="https://scontent.fhyd14-2.fna.fbcdn.net/v/t39.30808-6/374816715_712072764292316_3750664599588284677_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=5f2048&_nc_ohc=EGzmCCdxJLAAX-uVW6F&_nc_ht=scontent.fhyd14-2.fna&oh=00_AfCOcDkAVD3fiYDoDZGMsjG5ThaBYufv4xbxjP2t1GH9rA&oe=652ED4ED" alt="image is not available"></img>  
                        </div>

                    </div>
                    <div className="row" style={{background:'#EBFBFF',paddingTop:'10px'}}>
                    <div className="col col-6 col-md-6 left">
                        <section style={{lineHeight:'1.8'}}>{data?.hdetails.description}</section>
                    </div>
                        <div className="col col-6 col-md-6 right">
                            <div id="carouselExampleCaptions" class="carousel  slide" data-bs-ride="false">
                                <div class="carousel-indicators">
                                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                                </div>
                                <div class="carousel-inner">
                                    <div class="carousel-item active" data-bs-interval="1000">
                                    <img src={data?.hdetails.slideimg[0]} class="d-block w-100" alt="..."/>
                                    <div class="carousel-caption d-none d-md-block">
                                        <h5>{data?.hdetails.imgtitles[0]}</h5>
                                        <p>{data?.hdetails.imgcaptions[0]}</p>
                                    </div>
                                    </div>
                                    <div class="carousel-item" data-bs-interval="2000">
                                    <img src={data?.hdetails.slideimg[1]} class="d-block w-100" alt="..."/>
                                    <div class="carousel-caption d-none d-md-block">
                                        <h5>{data?.hdetails.imgtitles[1]}</h5>
                                        <p>{data?.hdetails.imgcaptions[1]}</p>
                                    </div>
                                    </div>
                                    <div class="carousel-item" data-bs-interval="2000">
                                    <img src={data?.hdetails.slideimg[2]} class="d-block w-100" alt="..."/>
                                    <div class="carousel-caption d-none d-md-block">
                                        <h5>{data?.hdetails.imgtitles[2]}</h5>
                                        <p>{data?.hdetails.imgcaptions[2]}</p>
                                    </div>
                                    </div>
                                </div>
                                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span class="visually-hidden">Previous</span>
                                </button>
                                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span class="visually-hidden">Next</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                </body>
            }
            <Link to={`/${data?.name}/BookAppointment/${hid}`} className="rounded" style={{position:'fixed', bottom:'50px', right:'80px',background:'#FFC107', border:'1px solid #FFC107',padding:'12px 36px',color: 'chocolate',fontWeight: '600'}}><span>Book Appointment</span></Link> 
        </div>
    )
}

export default Hdetails;