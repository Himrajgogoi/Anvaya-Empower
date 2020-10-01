import React, { Component } from "react";
import { CarouselProvider, Slider, Slide} from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import {Card, CardBody, CardText, CardImg} from "reactstrap";
import { HashLink as Link } from "react-router-hash-link";

class ConsultancyByService extends Component {
    constructor(props){
        super(props);
        this.state={
            ///for slide1///
            isHoverSlide1_Card1: false,
            isHoverSlide1_Card2: false,
            isHoverSlide1_Card3: false,
            isHoverSlide1_Card4: false,

            ///for slide2///
            isHoverSlide2_Card1: false,
            isHoverSlide2_Card2: false,
            isHoverSlide2_Card3: false,
            isHoverSlide2_Card4: false,

            ///for slide3///
            isHoverSlide3_Card1: false,
            isHoverSlide3_Card2: false,
            isHoverSlide3_Card3: false,
            isHoverSlide3_Card4: false,
        }
         ///for slide1///
        this.handleHoverSlide1_Card1 = this.handleHoverSlide1_Card1.bind(this);
        this.handleHoverSlide1_Card2 = this.handleHoverSlide1_Card2.bind(this);
        this.handleHoverSlide1_Card3 = this.handleHoverSlide1_Card3.bind(this);
        this.handleHoverSlide1_Card4 = this.handleHoverSlide1_Card4.bind(this);

        ///for slide2///
        this.handleHoverSlide2_Card1 = this.handleHoverSlide2_Card1.bind(this);
        this.handleHoverSlide2_Card2 = this.handleHoverSlide2_Card2.bind(this);
        this.handleHoverSlide2_Card3 = this.handleHoverSlide2_Card3.bind(this);
        this.handleHoverSlide2_Card4 = this.handleHoverSlide2_Card4.bind(this);

        ///for slide3///
        this.handleHoverSlide3_Card1 = this.handleHoverSlide3_Card1.bind(this);
        this.handleHoverSlide3_Card2 = this.handleHoverSlide3_Card2.bind(this);
        this.handleHoverSlide3_Card3 = this.handleHoverSlide3_Card3.bind(this);
        this.handleHoverSlide3_Card4 = this.handleHoverSlide3_Card4.bind(this);
    }
    
     ///for slide1///
    handleHoverSlide1_Card1(){
        this.setState({isHoverSlide1_Card1: !this.state.isHoverSlide1_Card1});
    }
    handleHoverSlide1_Card2(){
        this.setState({isHoverSlide1_Card2: !this.state.isHoverSlide1_Card2});
    }
    handleHoverSlide1_Card3(){
        this.setState({isHoverSlide1_Card3: !this.state.isHoverSlide1_Card3});
    }
    handleHoverSlide1_Card4(){
        this.setState({isHoverSlide1_Card4: !this.state.isHoverSlide1_Card4});
    }

    ///for slide2///
    handleHoverSlide2_Card1(){
        this.setState({isHoverSlide2_Card1: !this.state.isHoverSlide2_Card1});
    }
    handleHoverSlide2_Card2(){
        this.setState({isHoverSlide2_Card2: !this.state.isHoverSlide2_Card2});
    }
    handleHoverSlide2_Card3(){
        this.setState({isHoverSlide2_Card3: !this.state.isHoverSlide2_Card3});
    }
    handleHoverSlide2_Card4(){
        this.setState({isHoverSlide2_Card4: !this.state.isHoverSlide2_Card4});
    }

    ///for slide3///
    handleHoverSlide3_Card1(){
        this.setState({isHoverSlide3_Card1: !this.state.isHoverSlide3_Card1});
    }
    handleHoverSlide3_Card2(){
        this.setState({isHoverSlide3_Card2: !this.state.isHoverSlide3_Card2});
    }
    handleHoverSlide3_Card3(){
        this.setState({isHoverSlide3_Card3: !this.state.isHoverSlide3_Card3});
    }
    handleHoverSlide3_Card4(){
        this.setState({isHoverSlide3_Card4: !this.state.isHoverSlide3_Card4});
    }
    render() {

         ///for slide1///
        var slide1_style1;
        var slide1_style2;
        var slide1_style3;
        var slide1_style4;

        ///for slide2///
        var slide2_style1;
        var slide2_style2;
        var slide2_style3;
        var slide2_style4;

        ///for slide3///
        var slide3_style1;
        var slide3_style2;
        //var slide3_style3;
        var slide3_style4;


        ///for slide1///
        if(this.state.isHoverSlide1_Card1){
            slide1_style1={ marginTop: "10px", minHeight: "30vh", borderRadius: "12px" , boxShadow: "5px 10px 8px rgb(93, 93, 99)"}
        }
        else{
           slide1_style1= { marginTop: "10px", minHeight: "30vh", borderRadius: "12px"}
        }
        if(this.state.isHoverSlide1_Card2){
            slide1_style2={ marginTop: "10px", minHeight: "30vh", borderRadius: "12px" , boxShadow: "5px 10px 8px rgb(93, 93, 99)"}
        }
        else{
           slide1_style2= { marginTop: "10px", minHeight: "30vh", borderRadius: "12px"}
        }
        if(this.state.isHoverSlide1_Card3){
            slide1_style3={ marginTop: "10px", minHeight: "30vh", borderRadius: "12px" , boxShadow: "5px 10px 8px rgb(93, 93, 99)"}
        }
        else{
           slide1_style3= { marginTop: "10px", minHeight: "30vh", borderRadius: "12px"}
        }
        if(this.state.isHoverSlide1_Card4){
            slide1_style4={ marginTop: "10px", minHeight: "30vh", borderRadius: "12px" , boxShadow: "5px 10px 8px rgb(93, 93, 99)"}
        }
        else{
           slide1_style4= { marginTop: "10px", minHeight: "30vh", borderRadius: "12px" }
        }


        ///for slide2///
        if(this.state.isHoverSlide2_Card1){
            slide2_style1={ marginTop: "10px", minHeight: "30vh", borderRadius: "12px" , boxShadow: "5px 10px 8px rgb(93, 93, 99)"}
        }
        else{
           slide2_style1= { marginTop: "10px", minHeight: "30vh", borderRadius: "12px"}
        }
        if(this.state.isHoverSlide2_Card2){
            slide2_style2={ marginTop: "10px", minHeight: "30vh", borderRadius: "12px" , boxShadow: "5px 10px 8px rgb(93, 93, 99)"}
        }
        else{
           slide2_style2= { marginTop: "10px", minHeight: "30vh", borderRadius: "12px" }
        }
        if(this.state.isHoverSlide2_Card3){
            slide2_style3={ marginTop: "10px", minHeight: "30vh", borderRadius: "12px" , boxShadow: "5px 10px 8px rgb(93, 93, 99)"}
        }
        else{
           slide2_style3= { marginTop: "10px", minHeight: "30vh", borderRadius: "12px"}
        }
        if(this.state.isHoverSlide2_Card4){
            slide2_style4={ marginTop: "10px", minHeight: "30vh", borderRadius: "12px" , boxShadow: "5px 10px 8px rgb(93, 93, 99)"}
        }
        else{
           slide2_style4= { marginTop: "10px", minHeight: "30vh", borderRadius: "12px" }
        }


        ///for slide3///
        if(this.state.isHoverSlide3_Card1){
            slide3_style1={ marginTop: "10px", minHeight: "30vh", borderRadius: "12px" , boxShadow: "5px 10px 8px rgb(93, 93, 99)"}
        }
        else{
           slide3_style1= { marginTop: "10px", minHeight: "30vh", borderRadius: "12px" }
        }
        if(this.state.isHoverSlide3_Card2){
            slide3_style2={ marginTop: "10px", minHeight: "30vh", borderRadius: "12px" , boxShadow: "5px 10px 8px rgb(93, 93, 99)"}
        }
        else{
           slide3_style2= { marginTop: "10px", minHeight: "30vh", borderRadius: "12px" }
        }
        // if(this.state.isHoverSlide3_Card3){
        //     slide3_style3={ marginTop: "10px", minHeight: "30vh", borderRadius: "12px" , boxShadow: "5px 10px 8px rgb(93, 93, 99)"}
        // }
        // else{
        //    slide3_style3= { marginTop: "10px", minHeight: "30vh", borderRadius: "12px" }
        // }
        if(this.state.isHoverSlide3_Card4){
            slide3_style4={ marginTop: "10px", minHeight: "30vh", borderRadius: "12px" , boxShadow: "5px 10px 8px rgb(93, 93, 99)"}
        }
        else{
           slide3_style4= { marginTop: "10px", minHeight: "30vh", borderRadius: "12px" }
        }

        return ( <div >
            <CarouselProvider naturalSlideWidth = { 100 }
            totalSlides = { 3 }
            isIntrinsicHeight = "true"
            isPlaying = "true"
            style = {
                { backgroundColor: `rgb(211, 209, 245)`, paddingTop: "10px", paddingBottom: "20px", minHeight: "30vh" }
            } >
            <Slider >
            <Slide index = { 0 } > < div className = "container" >
            <div className = "row" >
            <div className = "col-6 col-md-3" >
            <Link to = "/ConsultancyServices#Branding" >
            <Card style = {
                slide1_style4
            } onMouseEnter ={this.handleHoverSlide1_Card4} onMouseLeave={this.handleHoverSlide1_Card4}>
            <CardImg src="https://www.flaticon.com/svg/static/icons/svg/1253/1253370.svg" className="img-fluid" style={{ height:"30vh"}}/>
           
            <CardBody style = {
                { backgroundColor: "white", borderRadius: "12px" }
            } >
            <CardText style={{color: "black",
           fontFamily: "Montserrat, sans-serif", fontWeight: "800" }} ><b>Branding</b> </CardText> </CardBody > 
            </Card>  
            </Link > 
            </div > 
            <div className = "col-6 col-md-3" >
            <Link to = "/ConsultancyServices#Marketing" >
            <Card style = {
               slide1_style1
            } onMouseEnter ={this.handleHoverSlide1_Card1} onMouseLeave={this.handleHoverSlide1_Card1}>
            <CardImg src="https://www.flaticon.com/svg/static/icons/svg/1077/1077221.svg" className="img-fluid" style={{ height:"30vh"}}/>
            
            <CardBody style = {
                { backgroundColor: "white", borderRadius: "12px" }
            } >
            <CardText style={{color: "black",
        fontFamily: "Montserrat, sans-serif", fontWeight: "800"}} ><b>Marketing</b> </CardText> 
            </CardBody > </Card> </Link >

            </div > 
            <div className = "col-6 col-md-3" >
            <Link to = "/ConsultancyServices#Sales" >
            <Card style = {
                slide1_style2
            } onMouseEnter ={this.handleHoverSlide1_Card2} onMouseLeave={this.handleHoverSlide1_Card2}>
            <CardImg src="https://www.flaticon.com/svg/static/icons/svg/1467/1467585.svg" className="img-fluid" style={{ height:"30vh"}}/>
            
            <CardBody style = {
                { backgroundColor: "white", borderRadius: "12px" }
            } >
            <CardText style={{color: "black",
        fontFamily: "Montserrat, sans-serif", fontWeight: "800"}} ><b>Sales</b></CardText> </CardBody > </Card> 
            </Link > 
            </div >
            <div className = "col-6 col-md-3" >
            <Link to = "/ConsultancyServices#MarketResearch" >
            <Card style = {
                slide1_style3
            } onMouseEnter ={this.handleHoverSlide1_Card3} onMouseLeave={this.handleHoverSlide1_Card3}>
            <CardImg src="https://www.flaticon.com/svg/static/icons/svg/2909/2909902.svg" className="img-fluid" style={{ height:"30vh"}}/>
           
            <CardBody style = {
                { backgroundColor:"white", borderRadius: "12px" }
            } >
            <CardText style={{color: "black",
            fontFamily: "Montserrat, sans-serif", fontWeight: "800"}} ><b>Market Research</b></CardText> </CardBody > </Card> 
            </Link > 
            </div > 
            </div > 
            </div > 
            </Slide > 
            <Slide index = { 1 } >
            <div className = "container" > 
            <div className = "row" >
            <div className = "col-6 col-md-3" >
            <Link to = "/ConsultancyServices#NewBusinessAdvisory" >
            <Card style = {
               slide2_style4
            }  onMouseEnter ={this.handleHoverSlide2_Card4} onMouseLeave={this.handleHoverSlide2_Card4}>
            <CardImg src="https://www.flaticon.com/svg/static/icons/svg/2906/2906151.svg" className="img-fluid" style={{ height:"30vh"}}/>
            
            <CardBody style = {
                { backgroundColor: "white", borderRadius: "12px" }
            } >
            <CardText style={{color: "black",
            fontFamily: "Montserrat, sans-serif", fontWeight: "800"}} ><b>New business advisory and existing business accleration support</b></CardText> </CardBody > 
            </Card>  
            </Link > </div > 
            <div className = "col-6 col-md-3" >
            <Link to = "/ConsultancyServices#HumanResource" >
            <Card style = {
               slide2_style1
            } onMouseEnter ={this.handleHoverSlide2_Card1} onMouseLeave={this.handleHoverSlide2_Card1}>
            <CardImg src="https://www.flaticon.com/svg/static/icons/svg/2942/2942304.svg" className="img-fluid" style={{ height:"30vh"}}/>
           
            <CardBody style = {
                { backgroundColor: "white", borderRadius: "12px" }
            } >
            <CardText style={{color: "black",
            fontFamily: "Montserrat, sans-serif", fontWeight: "800"}} ><b>Human Resource</b></CardText> 
            </CardBody > </Card> </Link > 
            </div > 
            <div className = "col-6 col-md-3" >
            <Link to = "/ConsultancyServices#CSR" >
            <Card style = {
                slide2_style2
            } onMouseEnter ={this.handleHoverSlide2_Card2} onMouseLeave={this.handleHoverSlide2_Card2}>
            <CardImg src="https://www.flaticon.com/svg/static/icons/svg/646/646503.svg" className="img-fluid" style={{ height:"30vh"}}/>
            
            <CardBody style = {
                { backgroundColor: "white", borderRadius: "12px" }
            } >
            <CardText style={{color: "black",
            fontFamily: "Montserrat, sans-serif", fontWeight: "800"}} ><b>CSR</b></CardText> 
            </CardBody > 
            </Card> </Link > 
            </div >
            <div className = "col-6 col-md-3" >
            <Link to = "/ConsultancyServices#DigitalMarketing" >
            <Card style = {
                slide2_style3
            } onMouseEnter ={this.handleHoverSlide2_Card3} onMouseLeave={this.handleHoverSlide2_Card3}>
            <CardImg src="https://www.flaticon.com/svg/static/icons/svg/902/902765.svg" className="img-fluid" style={{ height:"30vh"}}/>
           
            <CardBody style = {
                { backgroundColor: "white", borderRadius: "12px" }
            } >
            <CardText style={{color: "black",
            fontFamily: "Montserrat, sans-serif", fontWeight: "800"}} ><b>Digital Marketing</b></CardText> </CardBody > 
            </Card> 
            </Link > 
            </div > 
            </div > 
            </div > 
            </Slide> 
            <Slide index = { 2 } >
            <div className = "container" > 
            <div className = "row" >
            <div className = "col-6 col-md-3" >
            <Link to = "/ConsultancyServices#OperationalEfficiency" >
            <Card style = {
               slide3_style4
            } onMouseEnter ={this.handleHoverSlide3_Card4} onMouseLeave={this.handleHoverSlide3_Card4}>
            <CardImg src="https://www.flaticon.com/svg/static/icons/svg/3456/3456433.svg" className="img-fluid" style={{ height:"30vh"}}/>
           
            <CardBody style = {
                { backgroundColor: "white", borderRadius: "12px" }
            } >
            <CardText style={{color: "black",
            fontFamily: "Montserrat, sans-serif", fontWeight: "800"}} >Operational Efficiency(Supply Chain) and Quality Control</CardText> </CardBody > </Card> </Link > 
            </div > 
            <div className = "col-6 col-md-3" >
            <Link to = "/ConsultancyServices#RegulatoryAndGovernmentPolicy" >
            <Card style = {
               slide3_style1
            }  onMouseEnter ={this.handleHoverSlide3_Card1} onMouseLeave={this.handleHoverSlide3_Card1}>
            <CardImg src="https://www.flaticon.com/svg/static/icons/svg/3530/3530560.svg" className="img-fluid" style={{ height:"30vh"}}/>
          
            <CardBody style = {
                { backgroundColor: "white", borderRadius: "12px" }
            } >
            <CardText style={{color: "black",
            fontFamily: "Montserrat, sans-serif", fontWeight: "800"}} ><b>Regulatory and Government Policy</b></CardText> </CardBody > </Card>  </Link > 
            </div > 
            <div className = "col-6 col-md-3" >
            <Link to = "/ConsultancyServices#FundingComplianceAssessment" >
            <Card style = {
                slide3_style2
            }  onMouseEnter ={this.handleHoverSlide3_Card2} onMouseLeave={this.handleHoverSlide3_Card2}>
            <CardImg src="https://www.flaticon.com/svg/static/icons/svg/1355/1355162.svg" className="img-fluid" style={{ height:"30vh"}}/>
            
            <CardBody style = {
                { backgroundColor: "white", borderRadius: "12px" }
            } >
            <CardText style={{color: "black",
            fontFamily: "Montserrat, sans-serif", fontWeight: "800"}} ><b>Funding Compliance Assessment</b></CardText> </CardBody > 
            </Card> </Link >

            </div >
            </div > 
            </div > 
            </Slide> 
            </Slider > 
            </CarouselProvider >
           
            </div>
        );
    }
}

export default ConsultancyByService;