import React, { Component } from "react";
import { CarouselProvider, Slider, Slide} from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import Header from "./HeaderComponent";
import { Collapse, Card, CardHeader, CardBody, CardText, Jumbotron } from "reactstrap";
import { Link } from "react-router-dom";

class Technologies extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isCard1Open: false,
            isCard2Open: false,
            isCard3Open: false,
            isCard4Open: false,
            isHoverCard1: false,
            isHoverCard2: false,
            isHoverCard3: false,
            isHoverCard4: false,
        }
        this.handleCard1 = this.handleCard1.bind(this);
        this.handleCard2 = this.handleCard2.bind(this);
        this.handleCard3 = this.handleCard3.bind(this);
        this.handleCard4 = this.handleCard4.bind(this);
        this.handleHover1 = this.handleHover1.bind(this);
        this.handleHover2 = this.handleHover2.bind(this);
        this.handleHover3 = this.handleHover3.bind(this);
        this.handleHover4 = this.handleHover4.bind(this);
    }

    handleCard1() {
        this.setState({ isCard1Open: !this.state.isCard1Open });
    }
    handleCard2() {
        this.setState({ isCard2Open: !this.state.isCard2Open });
    }
    handleCard3() {
        this.setState({ isCard3Open: !this.state.isCard3Open });
    }
    handleCard4() {
        this.setState({ isCard4Open: !this.state.isCard4Open });
    }

    handleHover1() {
        this.setState({ isHoverCard1: !this.state.isHoverCard1 });
    }
    handleHover2() {
        this.setState({ isHoverCard2: !this.state.isHoverCard2 });
    }
    handleHover3() {
        this.setState({ isHoverCard3: !this.state.isHoverCard3 });
    }
    handleHover4() {
        this.setState({ isHoverCard4: !this.state.isHoverCard4 });
    }

    render() {
        var style1;
        var style2;
        var style3;
        var style4;

        if (this.state.isHoverCard1) {
            style1 = { backgroundColor: "blue", borderRadius: "8px", minWidth: "20vw", minHeight: "15vh" }
        } else {
            style1 = { backgroundColor: `#C4C4C4`, borderRadius: "8px", minWidth: "20vw", minHeight: "15vh" }
        }
        if (this.state.isHoverCard2) {
            style2 = { backgroundColor: "blue", borderRadius: "8px", minWidth: "20vw", minHeight: "15vh" }
        } else {
            style2 = { backgroundColor: `#C4C4C4`, borderRadius: "8px", minWidth: "20vw", minHeight: "15vh" }
        }
        if (this.state.isHoverCard3) {
            style3 = { backgroundColor: "blue", borderRadius: "8px", minWidth: "20vw", minHeight: "15vh" }
        } else {
            style3 = { backgroundColor: `#C4C4C4`, borderRadius: "8px", minWidth: "20vw", minHeight: "15vh" }
        }
        if (this.state.isHoverCard4) {
            style4 = { backgroundColor: "blue", borderRadius: "8px", minWidth: "20vw", minHeight: "15vh" }

        } else {
            style4 = { backgroundColor: `#C4C4C4`, borderRadius: "8px", minWidth: "20vw", minHeight: "15vh" }
        }

        var icon1;
        var icon2;
        var icon3;
        var icon4;

        if(this.state.isCard1Open){
            icon1 = "fa fa-arrow-up fa-lg text-white"
        }
        else{
            icon1="fa fa-arrow-down fa-lg text-white"
        }

        if(this.state.isCard2Open){
            icon2 = "fa fa-arrow-up fa-lg text-white"
        }
        else{
            icon2="fa fa-arrow-down fa-lg text-white"
        }

        if(this.state.isCard3Open){
            icon3 = "fa fa-arrow-up fa-lg text-white"
        }
        else{
            icon3="fa fa-arrow-down fa-lg text-white"
        }

        if(this.state.isCard4Open){
            icon4 = "fa fa-arrow-up fa-lg text-white"
        }
        else{
            icon4="fa fa-arrow-down fa-lg text-white"
        }

        return ( <div >
            <Header />
            <Jumbotron style = {
                { backgroundColor: `#36E11A`, marginBottom: "0px", minHeight: "2vh" }
            } >
            <div className = "container" >
            <div className = "row" >
            <div className = "col12 col-sm-6" >
            <h1 style = {
                { marginTop: "5px", marginBottom: "5px", marginLeft: "0px",
                fontFamily: "Montserrat, sans-serif", fontWeight: "800" }
            }
            className = "text-white" > Technologies </h1> 
            </div > 
            </div> 
            </div > 
            </Jumbotron> 
            <CarouselProvider naturalSlideWidth = { 100 }
            totalSlides = { 3 }
            isIntrinsicHeight = "true"
            isPlaying = "true"
            style = {
                { marginTop: "0px", backgroundColor: `#58FAE6`, paddingTop: "10px", paddingBottom: "20px", minHeight: "30vh" }
            } >
            <Slider >
            <Slide index = { 0 } > <h4 > Slide1 </h4></Slide > 
            <Slide index = { 1 } >
            <h4 > Slide2 </h4>  </Slide > 
            <Slide index = { 2 } >
            <h4 > Slide3 </h4>  </Slide > 
            </Slider > </CarouselProvider> 
            <div className = "container" style={{marginBottom: "5vh"}}>
            <div className = "row" >
            <div className = "col-12 col-sm-6" >
            <Card style = {
                { borderRadius: "8px", marginTop: "25px", minWidth: "20vw", minHeight: "15vh" }
            } >
            <CardHeader style = {
                style1
            }
            onMouseEnter = { this.handleHover1 }
            onMouseLeave = { this.handleHover1 } > <span className = "fa fa-laptop fa-lg text-white" > </span>
            <h3 className="d-inline text-white" style={{
            fontFamily: "Montserrat, sans-serif", fontWeight: "600"}}> IoT Solutions</h3 > < span className = {icon1}
            style = {
                {
                    display: "flex",
                    justifyContent: "flex-end"
                }
            }
            onClick = { this.handleCard1 } > </span>  </CardHeader > 
            <Collapse isOpen = { this.state.isCard1Open } >
            <CardBody style = {
                { borderRadius: "8px", backgroundColor: `#F57D39` }
            } > < CardText style={{color: `rgb(255, 255, 255)`}}> We provide world class IoT solutions to ease your daily life and give you a seamless experience <Link to="/technologieschildren" style={{color: `rgb(255, 230, 0)`}}>read more <span className="fa fa-arrow-right d-inline"></span></Link> </CardText></CardBody >
            </Collapse> 
            </Card > 
            </div> 
            <div className = "col-12 col-sm-6" >
            <Card style = {
                { borderRadius: "8px", marginBottom: "10px", marginTop: "25px", minWidth: "20vw", minHeight: "15vh" }
            } >
            <CardHeader style = {
                style2
            }
            onMouseEnter = { this.handleHover2 }
            onMouseLeave = { this.handleHover2 } > < span className = "fa fa-shield fa-lg text-white" >
            </span><h3 className="d-inline text-white" style={{
            fontFamily: "Montserrat, sans-serif", fontWeight: "600"}}> Cyber Security</h3 > 
            < span className = {icon2}
            style = {
                {
                    display: "flex",
                    justifyContent: "flex-end"
                }
            }
            onClick = { this.handleCard2 } > </span>  </CardHeader > 
            <Collapse isOpen = { this.state.isCard2Open } >
            <CardBody style = {
                { borderRadius: "8px", backgroundColor: `#F57D39` }
            } > < CardText style={{color: `rgb(255, 255, 255)`}}> In today's digital world the importance of cyber security is immense <Link to="/technologieschildren" style={{color: `rgb(255, 230, 0)`}}>read more <span className="fa fa-arrow-right d-inline"></span></Link> </CardText></CardBody >
            </Collapse> 
            </Card > 
            </div> 
            </div >

            <div className = "row" >
            <div className = "col-12 col-sm-6" >
            <Card style = {
                {
                    borderRadius: "8px",
                    marginBottom: "10px",
                    marginTop: "10px",
                    minWidth: "20vw",
                    minHeight: "15vh"
                }
            } >
            <CardHeader style = {
                style3
            }
            onMouseEnter = { this.handleHover3 }
            onMouseLeave = { this.handleHover3 } > < span className = "fa fa-magic fa-lg text-white " >
            </span><h3 className="d-inline text-white" style={{
            fontFamily: "Montserrat, sans-serif", fontWeight: "600"}}> Automation Solutions</h3 > < span className = {icon3}
            style = {
                {
                    display: "flex",
                    justifyContent: "flex-end"
                }
            }
            onClick = { this.handleCard3 } > </span> </CardHeader > 
            <Collapse isOpen = { this.state.isCard3Open } >
            <CardBody style = {
                { borderRadius: "8px", backgroundColor: `#F57D39` }
            } > < CardText style={{color: `rgb(255, 255, 255)`}}> Automaion is the future. We provide inovative automation solutions <Link to="/technologieschildren" style={{color: `rgb(255, 230, 0)`}}>read more <span className="fa fa-arrow-right d-inline"></span></Link> </CardText></CardBody >
            </Collapse> 
            </Card > 
            </div> 
            <div className = "col-12 col-sm-6" >
            <Card style = {
                { borderRadius: "8px", marginBottom: "10px", marginTop: "10px", minWidth: "20vw", minHeight: "15vh" }
            } >
            <CardHeader style = {
                style4
            }
            onMouseEnter = { this.handleHover4 }
            onMouseLeave = { this.handleHover4 } > < span className = "fa fa-globe fa-lg text-white" >
            </span><h3 className="d-inline text-white" style={{
            fontFamily: "Montserrat, sans-serif", fontWeight: "600"}}> Tracking Devices</h3 > 
            < span className = {icon4}
            style = {
                {
                    display: "flex",
                    justifyContent: "flex-end"
                }
            }
            onClick = { this.handleCard4 } > </span>  </CardHeader > 
            <Collapse isOpen = { this.state.isCard4Open } >
            <CardBody style = {
                { borderRadius: "8px", backgroundColor: `#F57D39` }
            } > < CardText style={{color: `rgb(255, 255, 255)`}}> Safety is incomplete without real-time tracking. We wish to provide the best safety measures in the market <Link to="/technologieschildren" style={{color:  `rgb(255, 230, 0)`}}>read more <span className="fa fa-arrow-right d-inline" ></span></Link> </CardText></CardBody >
            </Collapse> 
            </Card > 
            </div> 
            </div >

            </div>  
            </div >
        );
    }
}

export default Technologies;