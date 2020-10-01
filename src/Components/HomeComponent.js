import React, { Component } from "react";
import Header from "./HeaderComponent";
import { Modal, ModalBody, Button } from "reactstrap";
import icon from "../images/anvaya.png";
import back from "../images/background-anvaya.png";
import { Link } from "react-router-dom";

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {

            isModalOpen: true,
            isConHover: false,
            isTechHover: false,
        }

        this.handleModal = this.handleModal.bind(this);
        this.handleConHover = this.handleConHover.bind(this);
        this.handleTechHover = this.handleTechHover.bind(this);
    }

    handleModal() {
        this.setState({ isModalOpen: !this.state.isModalOpen });
    }
    handleConHover() {
        this.setState({ isConHover: !this.state.isConHover });
    }
    handleTechHover() {
        this.setState({ isTechHover: !this.state.isTechHover });
    }
    componentDidMount() {

    }
    render() {
        var Con;
        var Tech;
        if (this.state.isConHover) {
            Con = { backgroundColor: `rgb(218, 214, 6)`, marginTop: "10px", marginBottom: "10px", minHeight: "38vh", minWidth: "22vw" };
        } else {
            Con = { backgroundColor: `rgb(211, 209, 245)`, marginTop: "10px", marginBottom: "10px", minHeight: "38vh", minWidth: "22vw" };
        }
        if (this.state.isTechHover) {
            Tech = { backgroundColor: `rgb(238, 69, 162)`, marginTop: "10px", marginBottom: "10px", minHeight: "38vh", minWidth: "22vw" };
        } else {
            Tech = { backgroundColor: `rgb(13, 6, 145)`, marginTop: "10px", marginBottom: "10px", minHeight: "38vh", minWidth: "22vw" };
        }


        return ( <div className = "body"
            style = {
                { filter: "blur(4px)", backgroundImage: `url('${back}')`}
            } >
            <Header />
            <div className = "container" >
            <div className = "row"
            style = {
                { display: "flex", flexDirection: "row", alignItems: "stretch", justifyContent: "space-between" }
            } >
            <div className = "col-12" >
            <Modal isOpen = { this.state.isModalOpen }
            style = {
                { minWidth: "60vw" }
            } >
            <ModalBody style = {
                { backgroundColor: `rgb(26, 26, 32)` }
            } >
            <div className = "container"
            style = {
                { minHeight: "70vh" }
            } >
            <div className = "row" >
            <div className = "col-12 col-sm-6"
            style = {
                { marginTop: "80px" }
            } >
            <p ><img src={icon} alt="icon" className="img-fluid" style={{height: "60px", width: "60px", marginBottom:"2vh"}}/>
            < h4 className = "text-white" style={{fontFamily: "Montserrat, sans-serif", fontWeight: "600"}}> Welcome,
            at AnvayaEmpower we believe in providing innovative solutions to your career or technological problems.We broadly offer two kinds of services, as mentioned. </h4></p >
            </div> 
            <div className = "col-12 col-sm-4 offset-sm-1" >
            <h3 className = "text-white"
            style = {
                { marginLeft: "13px", marginTop: "10px" }
            } > Our Services </h3> 
            <div className = "container" >
            <div className = "row" >
            <div className = "col-12" >
            <Link to = "/consultancy"
            onMouseEnter = { this.handleConHover }
            onMouseLeave = { this.handleConHover } >
            <Button style = {
                Con
            } > <h5 style={{color: "black"}}> Consultancy </h5><span className="fa fa-arrow-right" style={{color: "black"}}></span > </Button> 

            </Link >

            <Link to = "/technologies"
            onMouseEnter = { this.handleTechHover }
            onMouseLeave = { this.handleTechHover } >
            <Button style = {
                Tech
            } > < h5 > Technologies </h5><span className="fa fa-arrow-right"></span > </Button> </Link >
            </div> 
            </div > </div> 
            </div > 
            </div> 
            </div > 
            </ModalBody> 
            </Modal > 
            </div> 
            </div > 
            </div> 
            </div > );
    }
}

export default Home;