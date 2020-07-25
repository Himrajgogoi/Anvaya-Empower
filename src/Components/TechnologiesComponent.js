import React, { Component } from "react";
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext, ButtonPlay } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import Header from "./HeaderComponent";
import { Collapse, Card, CardHeader, CardImgOverlay, CardImg, CardBody, CardText, Button, Jumbotron } from "reactstrap";
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

        return ( <div >
            <Header />
            <Jumbotron style = {
                { backgroundColor: `#36E11A`, marginBottom: "0px", minHeight: "2vh" }
            } >
            <div className = "container" >
            <div className = "row" >
            <div className = "col12 col-sm-6" >
            <h1 style = {
                { marginTop: "5px", marginBottom: "5px", marginLeft: "0px" }
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
            <div className = "container" >
            <div className = "row" >
            <div className = "col-12 col-sm-6" >
            <Card style = {
                { borderRadius: "8px", marginTop: "25px", minWidth: "20vw", minHeight: "15vh" }
            } >
            <CardHeader style = {
                style1
            }
            onMouseEnter = { this.handleHover1 }
            onMouseLeave = { this.handleHover1 } > <span className = "fa fa-square fa-lg text-white" > </span>
            <h3 className="d-inline text-white"> Card1 </h3 > < span className = "fa fa-arrow-down fa-lg text-white"
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
            } > < CardText > Dummy </CardText></CardBody >
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
            onMouseLeave = { this.handleHover2 } > < span className = "fa fa-square fa-lg text-white" >
            </span><h3 className="d-inline text-white">  Card2 </h3 > 
            < span className = "fa fa-arrow-down fa-lg text-white"
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
            } > < CardText > Dummy </CardText></CardBody >
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
            onMouseLeave = { this.handleHover3 } > < span className = "fa fa-square fa-lg text-white " >
            </span><h3 className="d-inline text-white"> Card3 </h3 > < span className = "fa fa-arrow-down fa-lg text-white"
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
            } > < CardText > Dummy </CardText></CardBody >
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
            onMouseLeave = { this.handleHover4 } > < span className = "fa fa-square fa-lg text-white" >
            </span><h3 className="d-inline text-white"> Card4 </h3 > 
            < span className = "fa fa-arrow-down fa-lg text-white"
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
            } > < CardText > Dummy </CardText></CardBody >
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