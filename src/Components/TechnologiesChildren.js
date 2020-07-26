import React, {Component} from "react";
import Header from "./HeaderComponent";
import { CarouselProvider, Slider, Slide} from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import {Card, CardBody, CardText} from "reactstrap";

class TechnologiesChildren extends Component{
     render(){
        return(
            <div>
                <Header/>
                <div style={{marginBottom: "0px", minHeight: "15vh", backgroundColor:`#36E11A`, minWidth: "100vw"}}>
                    <div className="container">
                        <div className="row">
                            <div className="col-12 col-sm-6">
                                <h1 style={{marginTop: "25px", color: "white"}}>Technologies Children</h1>
                            </div>
                        </div>
                    </div>
                   
                </div>
                <CarouselProvider naturalSlideWidth = { 100 }
                       totalSlides = { 3 }
                       isIntrinsicHeight = "true"
                       isPlaying = "true"
                       style = {
                             { marginTop: "0px", backgroundColor: `#E6EB09`, paddingTop: "10px", paddingBottom: "20px", minHeight: "30vh" }
                } >
                    <Slider >
                        <Slide index = { 0 } > < h4 > Slide1 </h4></Slide > 
                        <Slide index = { 1 } >
                                <h4 > Slide2 </h4>  
                        </Slide > 
                        <Slide index = { 2 } >
                                <h4 > Slide3 </h4>  </Slide > 
                    </Slider > 
                </CarouselProvider>
                <div className="container" style={{marginTop: "10vh", marginBottom: "10vh"}}>
                        <div className="row">
                            <div className="col-12" style={{display: "flex", justifyContent: "center", alignSelf: "center"}} >
                                <Card style={{minHeight: "60vh", minWidth: "80vw", backgroundColor: `#C4C4C4`, boxShadow: "5px 10px rgb(93, 93, 99)"}}>
                                    <div className="container">
                                        <div className="row">
                                            <div className="col-12">
                                                <CardBody>
                                                    <CardText>
                                                    <p > < h4 className = "text-white" style={{fontFamily: "Montserrat, sans-serif-800x"}}> Welcome,
                 at AnvayaEmpower we believe in providing innovative solutions to your career or technological problems.We broadly offer two kinds of services, as mentioned. </h4></p >
                                                    </CardText>
                                                </CardBody>
                                            </div>
                                        </div>
                                    </div>
                                </Card>
                            </div>
                        </div>
                    </div>
            </div>
         );
     }
    
}
export default TechnologiesChildren;