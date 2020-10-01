import React, { Component } from "react";
import { CarouselProvider, Slider, Slide} from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import Header from "./HeaderComponent";
import ConsultancyByService from "./ConsultancyByService";
import ConsultancyBySector from "./ConsultancyBySector";
import Blog from "./Blog";
import { CardBody, Jumbotron, Card, CardText } from "reactstrap";
import Foter from "./Footer";
import back from "../images/background-anvaya.png";


class Consultancy extends Component {
    render() {
        return ( <div style={{backgroundImage:`url(${back})`
        ,backgroundSize: "cover", backgroundFit: "no repeat", backgroundPosition: "center center"}}>
            <Header />
            <Jumbotron style = {
                { backgroundColor: `rgb(3, 3, 41)`, marginBottom: "0px", minHeight: "2vh", paddingLeft: "0px" }
            } >
            <div className = "container" >
            <div className = "row" >
            <div className = "col12 col-sm-6" >
            <h1 style = {
                { marginTop: "5px", marginBottom: "5px", marginLeft: "0px", fontFamily: "Montserrat, sans-serif", fontWeight: "800"}
            }
            className = "text-white" > Consultancy </h1> </div > 
            </div> </div > 
            </Jumbotron> 
            <CarouselProvider naturalSlideWidth = { 100 }
            totalSlides = { 3 }
            isIntrinsicHeight = "true"
            isPlaying = "true"
            style = {
                { marginTop: "0px", backgroundColor: `#FDF886`,minHeight: "30vh" }
            } >
            <Slider >
            <Slide index = { 0 } style={{backgroundImage: "url('https://images.pexels.com/photos/6229/marketing-board-strategy.jpg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940')",
             backgroundSize: "cover", backgroundFit: "no repeat", backgroundPosition: "center center", minHeight:"30vh" }}>
                <div className="container" style={{display:"flex",flexDirection:"row", justifyContent: "center",paddingTop:"30vh",paddingBottom:"2vh",
                 minWidth: "90vw" }}><div className="row">
                 <div className="col-12"  >
                        <Card>
                            <CardBody>
                                <CardText>
                                    <p>
                                    < h4 style={{fontFamily: "Montserrat, sans-serif-800x"}}> Welcome,
            at AnvayaEmpower we believe in providing innovative solutions to your career or technological problems.We broadly offer two kinds of services, as mentioned. </h4>
                                    </p>
                                    <p style={{display: "flex", flexDirection: "row", justifyContent: "center"}}><span className="fa fa-circle fa-lg"></span>
                                    <span className="fa fa-circle" style={{color: "grey"}}></span>
                                    <span className="fa fa-circle"style={{color: "grey"}}></span></p>
                                </CardText>
                            </CardBody>
                        </Card>
                    </div>
                 </div>
                </div></Slide > 
            <Slide index = { 1 } style={{backgroundImage: "url('https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940')",
             backgroundSize: "cover", backgroundFit: "no repeat", backgroundPosition: "center center", minHeight:"30vh" }}>
             <div className="container" style={{display:"flex",flexDirection:"row", justifyContent: "center",paddingTop:"30vh",paddingBottom:"2vh",
                 minWidth: "90vw" }}><div className="row">
                 <div className="col-12"  >
                        <Card>
                            <CardBody>
                                <CardText>
                                    <p>
                                    < h4 style={{fontFamily: "Montserrat, sans-serif-800x"}}> Welcome,
            at AnvayaEmpower we believe in providing innovative solutions to your career or technological problems.We broadly offer two kinds of services, as mentioned. </h4>
                                    </p>
                                    <p style={{display: "flex", flexDirection: "row", justifyContent: "center"}}>
                                    <span className="fa fa-circle" style={{color: "grey"}}></span>
                                    <span className="fa fa-circle fa-lg"></span>
                                    <span className="fa fa-circle"style={{color: "grey"}}></span></p>
                                </CardText>
                            </CardBody>
                        </Card>
                    </div>
                 </div>
                </div>
            </Slide > 
            <Slide index = { 2 } style={{backgroundImage: "url('https://images.pexels.com/photos/1181421/pexels-photo-1181421.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940')",
             backgroundSize: "cover", backgroundFit: "no repeat", backgroundPosition: "center center", minHeight:"30vh" }}>
            <div className="container" style={{display:"flex",flexDirection:"row", justifyContent: "center",paddingTop:"30vh",paddingBottom:"2vh",
                 minWidth: "90vw" }}><div className="row">
                 <div className="col-12"  >
                        <Card>
                            <CardBody>
                                <CardText>
                                    <p>
                                    < h4 style={{fontFamily: "Montserrat, sans-serif-800x"}}> Welcome,
            at AnvayaEmpower we believe in providing innovative solutions to your career or technological problems.We broadly offer two kinds of services, as mentioned. </h4>
                                    </p>
                                    <p style={{display: "flex", flexDirection: "row", justifyContent: "center"}}>
                                    <span className="fa fa-circle" style={{color: "grey"}}></span>
                                    <span className="fa fa-circle"style={{color: "grey"}}></span>
                                    <span className="fa fa-circle fa-lg"></span></p>
                                </CardText>
                            </CardBody>
                        </Card>
                    </div>
                 </div>
                </div>
           </Slide > 
            </Slider > </CarouselProvider>  
            <div className = "container"
            style = {
                {
                    backgroundColor: `rgb(13, 6, 145)`,
                    marginBottom: "0px",
                    paddingBottom: "10px",
                    paddingTop: "10px",

                    minWidth: "100vw"
                }
            } >
            <div className = "row" >
            <div className = "col12 col-sm-6" >
            <h2 style = {
                { marginTop: "5px", marginBottom: "5px", fontFamily: "Montserrat, sans-serif", fontWeight: "600" }
            }
            className = "text-white" > Consultancy Service </h2> </div > 
            </div> 
            </div > 
            <ConsultancyByService />

            <div className = "container"
            style = {
                { backgroundColor: `rgb(13, 6, 145)`, marginBottom: "0px", paddingBottom: "10px", paddingTop: "10px", minWidth: "100vw" }
            } >
            <div className = "row" >
            <div className = "col12 col-sm-6" >
            <h2 style = {
                { marginTop: "5px", marginBottom: "5px",fontFamily: "Montserrat, sans-serif", fontWeight: "600" }
            }
            className = "text-white" > Consulting </h2> 
            </div > 
            </div> 
            </div >
            <ConsultancyBySector />
            <div className = "container"
            style = {
                { backgroundColor: `rgb(13, 6, 145)`, marginBottom: "0px", paddingBottom: "10px", paddingTop: "10px", minWidth: "100vw" }
            } >
            <div className = "row" >
            <div className = "col12 col-sm-6" >
            <h2 style = {
                { marginTop: "5px", marginBottom: "5px", fontFamily: "Montserrat, sans-serif", fontWeight: "600" }
            }
            className = "text-white" > Blog </h2> </div > 
            </div> 
            </div >
            <Blog />
            <Foter/> 
            </div >
        );
    }
}
export default Consultancy;