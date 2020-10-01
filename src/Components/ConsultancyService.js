
import React, {Component} from "react";
import Header from "./HeaderComponent";
import { CarouselProvider, Slider, Slide} from 'pure-react-carousel';
import { Card, CardBody, CardText} from "reactstrap";
import 'pure-react-carousel/dist/react-carousel.es.css';
import Foter from "./Footer";
import back from "../images/background-anvaya.png";


class ConsultancyService extends Component{
   
   
    constructor(props){
        super(props);
        this.state={}
    }

   
    render(){
        return(
            <div style={{backgroundImage:`url(${back})`
            ,backgroundSize: "cover", backgroundFit: "no repeat", backgroundPosition: "center center"}}>
                <Header/>
                <div  style={{marginBottom: "0px", minHeight: "15vh", backgroundColor:`#4086F0`, minWidth: "100vw"}}>
                    <div className="container">
                        <div className="row">
                            <div className="col-12 col-sm-6">
                                <h1 style={{marginTop: "25px", color: "white", fontFamily: "Montserrat, sans-serif", fontWeight: "800"}}>Consultancy Services</h1>
                            </div>
                        </div>
                    </div>
                </div>
                <CarouselProvider naturalSlideWidth = { 100 }
                       totalSlides = { 3 }
                       isIntrinsicHeight = "true"
                       isPlaying = "true"
                       style = {
                             { marginTop: "0px", backgroundColor: `#C4C4C4`, minHeight: "30vh" }
                } >
                    <Slider >
                        <Slide index ={0} style={{backgroundImage: "url('https://images.pexels.com/photos/7075/people-office-group-team.jpg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940')"
                    ,backgroundSize: "cover", backgroundFit: "no repeat", backgroundPosition: "center center",minHeight: "30vh"}}><div className="container" style={{display:"flex",flexDirection:"row", justifyContent: "center",paddingTop:"30vh" }}><div className="row">
                    <div className="col-3"  >< h4 className="text-white"> Slide1 </h4></div></div></div></Slide > 
                        <Slide index = { 1 } style={{backgroundImage: "url('https://images.pexels.com/photos/3760067/pexels-photo-3760067.jpeg?auto=compress&cs=tinysrgb&h=650&w=940')"
                    ,backgroundSize: "cover", backgroundFit: "no repeat", backgroundPosition: "center center",minHeight: "30vh"}}><div className="container" style={{display:"flex",flexDirection:"row", justifyContent: "center",paddingTop:"30vh" }}><div className="row">
                    <div className="col-3"  >< h4 className="text-white"> Slide1 </h4></div></div></div>  
                        </Slide > 
                        <Slide index = { 2 }  style={{backgroundImage: "url('https://images.pexels.com/photos/4386373/pexels-photo-4386373.jpeg?auto=compress&cs=tinysrgb&h=650&w=940')"
                    ,backgroundSize: "cover", backgroundFit: "no repeat", backgroundPosition: "center center",minHeight: "30vh"}}><div className="container" style={{display:"flex",flexDirection:"row", justifyContent: "center",paddingTop:"30vh" }}><div className="row">
                    <div className="col-3"  >< h4 className="text-white"> Slide1 </h4></div></div></div></Slide > 
                    </Slider > 
                </CarouselProvider>
                <div className="container" style={{paddingTop: "5vh"}}  >
                    <div className="row">
                        <div className="col-12 col-sm-4 offset-sm-4" >
                            <h2 style={{display: "flex", justifyContent:"center", fontFamily: "Montserrat, sans-serif", fontWeight: "800"}} id="Branding">Branding</h2>
                            <Card style={{display: "flex", justifyContent:"center", height: "2px", backgroundColor: "black"}}></Card>
                        </div>
                    </div>
                </div>
                <div style={{marginTop:"50px", minWidth: "100vw",  minHeight: "50vh", backgroundColor: `#B8EFA4`, backgroundImage: "url('https://www.flaticon.com/svg/static/icons/svg/1253/1253444.svg')"
            ,backgroundSize: "12vw 12vh", backgroundRepeat: "no repeat", backgroundPosition: "center center",opacity: "0.8", backdropFilter: "blur(8px)"}}>

                  <div className="container" style={{paddingTop:"10vh", paddingBottom: "10vh"}}>
                        <div className="row">
                            <div className="col-12">
                                <Card style={{padding: "4vh 4vw 4vh 4vw"}}>
                                    <CardBody style={{border: "1px solid"}}>
                                        <CardText>
                                        <p > < h4 style={{fontFamily: "Montserrat, sans-serif-800x", color: "black"}}> Welcome,
                 at AnvayaEmpower we believe in providing innovative solutions to your career or technological problems.We broadly offer two kinds of services, as mentioned. </h4></p >
                                        </CardText>
                                    </CardBody>
                                </Card>
                               
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container" style={{paddingTop: "5vh"}}>
                    <div className="row">
                        <div className="col-12 col-sm-5 offset-sm-4" >
                            <h2 style={{display: "flex", justifyContent:"center", fontFamily: "Montserrat, sans-serif", fontWeight: "800"}} id="Marketing">Marketing</h2>
                            <Card style={{display: "flex", justifyContent:"center", height: "2px", backgroundColor: "black"}}></Card>
                        </div>
                    </div>
                </div>
                <div style={{marginTop:"50px", minWidth: "100vw",  minHeight: "50vh", backgroundColor: `#B8EFA4`,backgroundImage: "url('https://www.flaticon.com/svg/static/icons/svg/1077/1077170.svg')"
            ,backgroundSize: "12vw 12vh", backgroundRepeat: "no repeat", backgroundPosition: "center center",opacity: "0.8", backdropFilter: "blur(10px)"}}>

                  <div className="container" style={{paddingTop:"10vh", paddingBottom: "10vh"}}>
                        <div className="row">
                            <div className="col-12">
                                <Card style={{padding: "4vh 4vw 4vh 4vw" }}>
                                    <CardBody style={{border: "1px solid"}}>
                                        <CardText>
                                        <p > < h4 style={{fontFamily: "Montserrat, sans-serif-800x", color: "black"}}> Welcome,
                 at AnvayaEmpower we believe in providing innovative solutions to your career or technological problems.We broadly offer two kinds of services, as mentioned. </h4></p >
                                        </CardText>
                                    </CardBody>
                                </Card>
                               
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container" style={{paddingTop: "5vh"}} >
                    <div className="row">
                        <div className="col-12 col-sm-4 offset-sm-4" >
                            <h2 style={{display: "flex", justifyContent:"center", fontFamily: "Montserrat, sans-serif", fontWeight: "800"}} id="Sales">Sales</h2>
                            <Card style={{display: "flex", justifyContent:"center", height: "2px", backgroundColor: "black"}}></Card>
                        </div>
                    </div>
                </div>
                <div style={{marginTop:"50px", minWidth: "100vw",  minHeight: "50vh", backgroundColor: `#B8EFA4`,backgroundImage: "url('https://www.flaticon.com/svg/static/icons/svg/1467/1467510.svg')"
            ,backgroundSize: "12vw 12vh", backgroundRepeat: "no repeat", backgroundPosition: "center center",opacity: "0.8", backdropFilter: "blur(8px)"}}>

                  <div className="container" style={{paddingTop:"10vh", paddingBottom: "10vh"}}>
                        <div className="row">
                            <div className="col-12">
                                <Card style={{padding: "4vh 4vw 4vh 4vw" }}>
                                    <CardBody style={{border: "1px solid"}}>
                                        <CardText>
                                        <p > < h4 style={{fontFamily: "Montserrat, sans-serif-800x", color: "black"}}> Welcome,
                 at AnvayaEmpower we believe in providing innovative solutions to your career or technological problems.We broadly offer two kinds of services, as mentioned. </h4></p >
                                        </CardText>
                                    </CardBody>
                                </Card>
                               
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container" style={{paddingTop: "5vh"}} >
                    <div className="row">
                        <div className="col-12 col-sm-5 offset-sm-4" >
                            <h2 style={{display: "flex", justifyContent:"center", fontFamily: "Montserrat, sans-serif", fontWeight: "800"}} id="MarketResearch">Market Research</h2>
                            <Card style={{display: "flex", justifyContent:"center", height: "2px", backgroundColor: "black"}}></Card>
                        </div>
                    </div>
                </div>
                <div style={{marginTop:"50px", minWidth: "100vw",  minHeight: "50vh", backgroundColor: `#B8EFA4`,backgroundImage: "url('https://www.flaticon.com/svg/static/icons/svg/2910/2910070.svg')"
            ,backgroundSize: "12vw 12vh", backgroundRepeat: "no repeat", backgroundPosition: "center center",opacity: "0.8", backdropFilter: "blur(8px)"}}>

                  <div className="container" style={{paddingTop:"10vh", paddingBottom: "10vh"}}>
                        <div className="row">
                            <div className="col-12">
                                <Card style={{padding: "4vh 4vw 4vh 4vw" }}>
                                    <CardBody style={{border: "1px solid"}}>
                                        <CardText>
                                        <p > < h4 style={{fontFamily: "Montserrat, sans-serif-800x", color: "black"}}> Welcome,
                 at AnvayaEmpower we believe in providing innovative solutions to your career or technological problems.We broadly offer two kinds of services, as mentioned. </h4></p >
                                        </CardText>
                                    </CardBody>
                                </Card>
                               
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container" style={{paddingTop: "5vh"}} >
                    <div className="row">
                        <div className="col-12" >
                            <h2 style={{display: "flex", justifyContent:"center", fontFamily: "Montserrat, sans-serif", fontWeight: "800"}} id="NewBusinessAdvisory">New Business Advisory And Existing Business Acceleration Support</h2>
                            <Card style={{display: "flex", justifyContent:"center", height: "2px", backgroundColor: "black"}}></Card>
                        </div>
                    </div>
                </div>
                <div style={{marginTop:"50px", minWidth: "100vw",  minHeight: "50vh", backgroundColor: `#B8EFA4`,backgroundImage: "url('https://www.flaticon.com/svg/static/icons/svg/2906/2906226.svg')"
            ,backgroundSize: "12vw 12vh", backgroundRepeat: "no repeat", backgroundPosition: "center center",opacity: "0.8", backdropFilter: "blur(8px)"}}>

                  <div className="container" style={{paddingTop:"10vh", paddingBottom: "10vh"}}>
                        <div className="row">
                            <div className="col-12">
                                <Card style={{padding: "4vh 4vw 4vh 4vw" }}>
                                    <CardBody style={{border: "1px solid"}}>
                                        <CardText>
                                        <p > < h4 style={{fontFamily: "Montserrat, sans-serif-800x", color: "black"}}> Welcome,
                 at AnvayaEmpower we believe in providing innovative solutions to your career or technological problems.We broadly offer two kinds of services, as mentioned. </h4></p >
                                        </CardText>
                                    </CardBody>
                                </Card>
                               
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container" style={{paddingTop: "5vh"}} >
                    <div className="row">
                        <div className="col-12 col-sm-5 offset-sm-4" >
                            <h2 style={{display: "flex", justifyContent:"center", fontFamily: "Montserrat, sans-serif", fontWeight: "800"}} id="HumanResource">Human Resource</h2>
                            <Card style={{display: "flex", justifyContent:"center", height: "2px", backgroundColor: "black"}}></Card>
                        </div>
                    </div>
                </div>
                <div style={{marginTop:"50px", minWidth: "100vw",  minHeight: "50vh", backgroundColor: `#B8EFA4`,backgroundImage: "url('https://www.flaticon.com/svg/static/icons/svg/2942/2942275.svg')"
            ,backgroundSize: "12vw 12vh", backgroundRepeat: "no repeat", backgroundPosition: "center center",opacity: "0.8", backdropFilter: "blur(8px)"}}>

                  <div className="container" style={{paddingTop:"10vh", paddingBottom: "10vh"}}>
                        <div className="row">
                            <div className="col-12">
                                <Card style={{padding: "4vh 4vw 4vh 4vw" }}>
                                    <CardBody style={{border: "1px solid"}}>
                                        <CardText>
                                        <p > < h4 style={{fontFamily: "Montserrat, sans-serif-800x", color: "black"}}> Welcome,
                 at AnvayaEmpower we believe in providing innovative solutions to your career or technological problems.We broadly offer two kinds of services, as mentioned. </h4></p >
                                        </CardText>
                                    </CardBody>
                                </Card>
                               
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container" style={{paddingTop: "5vh"}} >
                    <div className="row">
                        <div className="col-12 col-sm-4 offset-sm-4" >
                            <h2 style={{display: "flex", justifyContent:"center", fontFamily: "Montserrat, sans-serif", fontWeight: "800"}} id="CSR">CSR</h2>
                            <Card style={{display: "flex", justifyContent:"center", height: "2px", backgroundColor: "black"}}></Card>
                        </div>
                    </div>
                </div>
                <div style={{marginTop:"50px", minWidth: "100vw",  minHeight: "50vh", backgroundColor: `#B8EFA4`,backgroundImage: "url('https://www.flaticon.com/svg/static/icons/svg/646/646503.svg')"
            ,backgroundSize: "12vw 12vh", backgroundRepeat: "no repeat", backgroundPosition: "center center",opacity: "0.8", backdropFilter: "blur(8px)"}}>

                  <div className="container" style={{paddingTop:"10vh", paddingBottom: "10vh"}}>
                        <div className="row">
                            <div className="col-12">
                                <Card style={{padding: "4vh 4vw 4vh 4vw" }}>
                                    <CardBody style={{border: "1px solid"}}>
                                        <CardText>
                                        <p > < h4 style={{fontFamily: "Montserrat, sans-serif-800x", color: "black"}}> Welcome,
                 at AnvayaEmpower we believe in providing innovative solutions to your career or technological problems.We broadly offer two kinds of services, as mentioned. </h4></p >
                                        </CardText>
                                    </CardBody>
                                </Card>
                               
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container" style={{paddingTop: "5vh"}} >
                    <div className="row">
                        <div className="col-12 col-sm-4 offset-sm-4" >
                            <h2 style={{display: "flex", justifyContent:"center", fontFamily: "Montserrat, sans-serif", fontWeight: "800"}} id="DigitalMarketing">Digital Marketing</h2>
                            <Card style={{display: "flex", justifyContent:"center", height: "2px", backgroundColor: "black"}}></Card>
                        </div>
                    </div>
                </div>
                <div style={{marginTop:"50px", minWidth: "100vw",  minHeight: "50vh", backgroundColor: `#B8EFA4`,backgroundImage: "url('https://www.flaticon.com/svg/static/icons/svg/902/902728.svg')"
            ,backgroundSize: "12vw 12vh", backgroundRepeat: "no repeat", backgroundPosition: "center center",opacity: "0.8", backdropFilter: "blur(8px)"}}>

                  <div className="container" style={{paddingTop:"10vh", paddingBottom: "10vh"}}>
                        <div className="row">
                            <div className="col-12">
                                <Card style={{padding: "4vh 4vw 4vh 4vw" }}>
                                    <CardBody style={{border: "1px solid"}}>
                                        <CardText>
                                        <p > < h4 style={{fontFamily: "Montserrat, sans-serif-800x", color: "black"}}> Welcome,
                 at AnvayaEmpower we believe in providing innovative solutions to your career or technological problems.We broadly offer two kinds of services, as mentioned. </h4></p >
                                        </CardText>
                                    </CardBody>
                                </Card>
                               
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container" style={{paddingTop: "5vh"}} >
                    <div className="row">
                        <div className="col-12 col-sm-10 offset-sm-1" >
                            <h2 style={{display: "flex", justifyContent:"center", fontFamily: "Montserrat, sans-serif", fontWeight: "800"}} id="OperationalEfficiency">Operational Efficiency( Supply Chain )And Quality Control</h2>
                            <Card style={{display: "flex", justifyContent:"center", height: "2px", backgroundColor: "black"}}></Card>
                        </div>
                    </div>
                </div>
                <div style={{marginTop:"50px", minWidth: "100vw",  minHeight: "50vh", backgroundColor: `#B8EFA4`,backgroundImage: "url('https://www.flaticon.com/svg/static/icons/svg/3456/3456433.svg')"
            ,backgroundSize: "12vw 12vh", backgroundRepeat: "no repeat", backgroundPosition: "center center",opacity: "0.8", backdropFilter: "blur(8px)"}}>

                  <div className="container" style={{paddingTop:"10vh", paddingBottom: "10vh"}}>
                        <div className="row">
                            <div className="col-12">
                                <Card style={{padding: "4vh 4vw 4vh 4vw" }}>
                                    <CardBody style={{border: "1px solid"}}>
                                        <CardText>
                                        <p > < h4 style={{fontFamily: "Montserrat, sans-serif-800x", color: "black"}}> Welcome,
                 at AnvayaEmpower we believe in providing innovative solutions to your career or technological problems.We broadly offer two kinds of services, as mentioned. </h4></p >
                                        </CardText>
                                    </CardBody>
                                </Card>
                               
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container" style={{paddingTop: "5vh"}} >
                    <div className="row">
                        <div className="col-12 col-sm-7 offset-sm-3" >
                            <h2 style={{display: "flex", justifyContent:"center", fontFamily: "Montserrat, sans-serif", fontWeight: "800"}} id="RegulatoryAndGovernmentPolicy">Regulatory And Government Policy</h2>
                            <Card style={{display: "flex", justifyContent:"center", height: "2px", backgroundColor: "black"}}></Card>
                        </div>
                    </div>
                </div>
                <div style={{marginTop:"50px", minWidth: "100vw",  minHeight: "50vh", backgroundColor: `#B8EFA4`,backgroundImage: "url('https://www.flaticon.com/svg/static/icons/svg/3530/3530560.svg')"
            ,backgroundSize: "12vw 12vh", backgroundRepeat: "no repeat", backgroundPosition: "center center",opacity: "0.8", backdropFilter: "blur(8px)"}}>

                  <div className="container" style={{paddingTop:"10vh", paddingBottom: "10vh"}}>
                        <div className="row">
                            <div className="col-12">
                                <Card style={{padding: "4vh 4vw 4vh 4vw" }}>
                                    <CardBody style={{border: "1px solid"}}>
                                        <CardText>
                                        <p > < h4 style={{fontFamily: "Montserrat, sans-serif-800x", color: "black"}}> Welcome,
                 at AnvayaEmpower we believe in providing innovative solutions to your career or technological problems.We broadly offer two kinds of services, as mentioned. </h4></p >
                                        </CardText>
                                    </CardBody>
                                </Card>
                               
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container" style={{paddingTop: "5vh"}} >
                    <div className="row">
                        <div className="col-12 col-sm-7 offset-sm-3" >
                            <h2 style={{display: "flex", justifyContent:"center", fontFamily: "Montserrat, sans-serif", fontWeight: "800"}} id="FundingComplianceAssessment">Funding Compliance Assessment</h2>
                            <Card style={{display: "flex", justifyContent:"center", height: "2px", backgroundColor: "black"}}></Card>
                        </div>
                    </div>
                </div>
                <div style={{marginTop:"50px", minWidth: "100vw",  minHeight: "50vh", backgroundColor: `#B8EFA4`,backgroundImage: "url('https://www.flaticon.com/svg/static/icons/svg/1355/1355236.svg')"
            ,backgroundSize: "12vw 12vh", backgroundRepeat: "no repeat", backgroundPosition: "center center",opacity: "0.8", backdropFilter: "blur(8px)"}}>

                  <div className="container" style={{paddingTop:"10vh", paddingBottom: "10vh"}}>
                        <div className="row">
                            <div className="col-12">
                                <Card style={{padding: "4vh 4vw 4vh 4vw" }}>
                                    <CardBody style={{border: "1px solid"}}>
                                        <CardText>
                                        <p > < h4 style={{fontFamily: "Montserrat, sans-serif-800x", color: "black"}}> Welcome,
                 at AnvayaEmpower we believe in providing innovative solutions to your career or technological problems.We broadly offer two kinds of services, as mentioned. </h4></p >
                                        </CardText>
                                    </CardBody>
                                </Card>
                               
                            </div>
                        </div>
                    </div>
                </div>
                <Foter/> 
            </div>
        );
    }


}
export default ConsultancyService;