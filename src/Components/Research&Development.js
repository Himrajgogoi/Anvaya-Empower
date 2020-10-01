import React, {Component} from "react";
import Header from "./HeaderComponent";
import { CarouselProvider, Slider, Slide} from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import {Card, CardBody, CardText} from "reactstrap";
import Foter from "./Footer";
import back from "../images/background-anvaya.png";

class ResearchAndDevelopment extends Component{
     render(){
        return(
            <div style={{backgroundImage:`url(${back})`
            ,backgroundSize: "cover", backgroundFit: "no repeat", backgroundPosition: "center center"}}>
                <Header/>
                <div style={{marginBottom: "0px", minHeight: "15vh", backgroundColor:`rgb(70, 14, 107)`, minWidth: "100vw"}}>
                    <div className="container">
                        <div className="row">
                            <div className="col-12 col-sm-6">
                                <h1 style={{marginTop: "25px", color: "white",fontFamily: "Montserrat, sans-serif", fontWeight: "800" }}>Research and Development</h1>
                            </div>
                        </div>
                    </div>
                   
                </div>
                <CarouselProvider naturalSlideWidth = { 100 }
                       totalSlides = { 3 }
                       isIntrinsicHeight = "true"
                       isPlaying = "true"
                       style = {
                             { marginTop: "0px", backgroundColor: `#E6EB09`,minHeight: "30vh" }
                } >
                    <Slider >
                        <Slide index = { 0 } style={{backgroundImage: "url('https://cdn.pixabay.com/photo/2014/09/20/13/52/board-453758_1280.jpg')"
                    ,backgroundSize: "cover", backgroundFit: "no repeat", backgroundPosition: "center center",minHeight: "30vh"}}><div className="container" style={{display:"flex",flexDirection:"row", justifyContent: "center",paddingTop:"30vh" }}><div className="row">
                    <div className="col-3"  >< h4 className="text-white"> Slide1 </h4></div></div></div></Slide > 
                        <Slide index = { 1 } style={{backgroundImage: "url('https://images.pexels.com/photos/3184460/pexels-photo-3184460.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940')"
                    ,backgroundSize: "cover", backgroundFit: "no repeat", backgroundPosition: "center center",minHeight: "30vh"}}>
                    <div className="container" style={{display:"flex",flexDirection:"row", justifyContent: "center",paddingTop:"30vh" }}><div className="row">
                 <div className="col-3"  >< h4 className="text-white"> Slide2 </h4></div></div></div>  
                        </Slide > 
                        <Slide index = { 2 } style={{backgroundImage: "url('https://images.pexels.com/photos/179993/pexels-photo-179993.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940')"
                    ,backgroundSize: "cover", backgroundFit: "no repeat", backgroundPosition: "center center",minHeight: "30vh"}}>
                                <div className="container" style={{display:"flex",flexDirection:"row", justifyContent: "center",paddingTop:"30vh" }}><div className="row">
                 <div className="col-3"  >< h4 className="text-white"> Slide3 </h4></div></div></div> </Slide > 
                    </Slider > 
                </CarouselProvider>
                        <div className="row">
                            <div className="col-12 col-md-5 offset-md-1">
                               <h3 style={{marginTop: "3vh", marginLeft: "3vw",fontFamily: "Montserrat, sans-serif", fontWeight: "800"}}>Agriculture</h3> 
                               <Card style={{height: "1px", marginLeft: "3vw", width: "12vw"}}></Card>
                            </div>
                        </div>
                        <div className="row">
                            {/* <div className="col-12" style={{display: "flex", justifyContent: "center", alignSelf: "center",marginTop: "10vh"}} >
                                <Card style={{minHeight: "60vh", minWidth: "80vw", backgroundColor: "white", boxShadow: "5px 10px 10px rgb(93, 93, 99)", opacity:"0.8", backdropFilter: "blur(4px)" }}>
                                    <div className="container">
                                        <div className="row">
                                            <div className="col-12">
                                                <CardBody>
                                                    <CardText>
                                                    <p > < h4 style={{fontFamily: "Montserrat, sans-serif-800x"}}> Welcome,
                 at AnvayaEmpower we believe in providing innovative solutions to your career or technological problems.We broadly offer two kinds of services, as mentioned. </h4></p >
                                                    </CardText>
                                                </CardBody>
                                            </div>
                                        </div>
                                    </div>
                                </Card>
                            </div> */}
                             <div className="col-12 col-md-3 col-sm-4 offset-md-1 order-sm-last">
                            <img src="https://www.flaticon.com/svg/static/icons/svg/3228/3228952.svg" alt="plant" className="img-fluid" style={{height: "23vh", width: "20vw", padding: "8px 2px 8px 2px",display: "flex", flexDirection: "row",
                            borderRadius :"40%", border: "2px solid",marginTop: "3vh", marginLeft: "3vw"}} />
                            </div>
                            <div className="col-12 col-md-5 offset-md-1 order-md-first">
                                <Card style={{marginTop: "3vh", marginLeft: "3vw", backgroundColor: "black", padding: "2vh 2vw 2vh 2vw"}}>
                                    <CardBody>
                                        <CardText>
                                        <p > < h4 style={{fontFamily: "Montserrat, sans-serif-800x", color: "white", fontSize :"15pt"}}> Welcome,
                                            at AnvayaEmpower we believe in providing innovative solutions to your career or technological problems.
                                            We broadly offer two kinds of services, as mentioned.</h4></p >
                                            <details style={{color: "white"}}>
                                                <summary>products</summary>
                                             <ul>
                                                 <li>Smart pesticides spraying machine. </li>
                                                 <li>IOT based dripped irrigation system. </li>
                                             </ul>
                                            </details>
                                            
                                        </CardText>
                                    </CardBody>
                                </Card>
                            </div>
                           
                        </div>
                        <div className="row">
                            <div className="col-12 col-md-5 offset-md-6">
                               <h3 style={{marginTop: "8vh", marginLeft: "3vw",fontFamily: "Montserrat, sans-serif", fontWeight: "800"}}>Oil and Gas</h3> 
                               <Card style={{height: "1px", marginLeft: "3vw", width: "12vw", backgroundColor: "black"}}></Card>
                            </div>
                        </div>
                        <div className = "row">
                            <div className="col-12 col-md-3 col-sm-4 offset-md-1 order-sm-first">
                                <img src="https://www.flaticon.com/svg/static/icons/svg/2933/2933927.svg" alt="petrol pump" className="img-fluid" style={{height: "23vh", width: "20vw", padding: "8px 2px 8px 2px",display: "flex", flexDirection: "row",
                                borderRadius :"40%", border: "2px solid",marginTop: "3vh", marginLeft: "3vw"}} />
                            </div>
                            <div className="col-12 col-md-5 offset-md-2 order-md-first">
                                <Card style={{marginTop: "3vh", marginLeft: "3vw", backgroundColor: ` rgb(147, 147, 151)`, padding: "2vh 2vw 2vh 2vw"}}>
                                    <CardBody>
                                        <CardText>
                                        <p > < h4 style={{fontFamily: "Montserrat, sans-serif-800x", color: "floralwhite", fontSize :"15pt"}}> Welcome,
                                            at AnvayaEmpower we believe in providing innovative solutions to your career or technological problems.
                                            We broadly offer two kinds of services, as mentioned.</h4></p >
                                            <details style={{color: "white"}}>
                                                <summary>products</summary>
                                             <ul>
                                                 <li>Distribution Fiber optic sensing for leakage detection.  </li>
                                                 
                                             </ul>
                                            </details>
                                            
                                        </CardText>
                                    </CardBody>
                                </Card>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12 col-md-5 offset-md-1">
                               <h3 style={{marginTop: "8vh", marginLeft: "3vw",fontFamily: "Montserrat, sans-serif", fontWeight: "800"}}>Electric Vehicles</h3> 
                               <Card style={{height: "1px", marginLeft: "3vw", width: "12vw"}}></Card>
                            </div>
                        </div>
                        <div className="row">
                        <div className="col-12 col-md-3 col-sm-4 offset-md-1 order-sm-last">
                            <img src="https://www.flaticon.com/svg/static/icons/svg/1909/1909758.svg" alt="electric vehicle" className="img-fluid" style={{height: "23vh", width: "20vw", padding: "8px 2px 8px 2px",display: "flex", flexDirection: "row",
                            borderRadius :"40%", border: "2px solid",marginTop: "3vh", marginLeft: "3vw"}} />
                            </div>
                            <div className="col-12 col-md-5 offset-md-1 order-md-first">
                                <Card style={{marginTop: "3vh", marginLeft: "3vw", backgroundColor: "black", padding: "2vh 2vw 2vh 2vw"}}>
                                    <CardBody>
                                        <CardText>
                                        <p > < h4 style={{fontFamily: "Montserrat, sans-serif-800x", color: "white", fontSize :"15pt"}}> Welcome,
                                            at AnvayaEmpower we believe in providing innovative solutions to your career or technological problems.
                                            We broadly offer two kinds of services, as mentioned.</h4></p >
                                            <details style={{color: "white"}}>
                                                <summary>products</summary>
                                             <ul>
                                                
                                                 <li>Hybrid Electric Vehicle.  </li>
                                             </ul>
                                            </details>
                                            
                                        </CardText>
                                    </CardBody>
                                </Card>
                            </div>
                        </div>
        
                    <Foter/> 
            </div>
         );
     }
    
}
export default ResearchAndDevelopment;