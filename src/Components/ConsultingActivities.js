import React, { Component } from "react";
import { CarouselProvider, Slider, Slide} from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';

import { Card, CardBody, CardText} from "reactstrap";
import { Link } from "react-router-dom";

class Activities extends Component {
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
        var slide3_style3;
        var slide3_style4;


        ///for slide1///
        if(this.state.isHoverSlide1_Card1){
            slide1_style1={ marginTop: "10px", minHeight: "30vh", borderRadius: "12px" , boxShadow: "5px 10px 8px rgb(93, 93, 99)"}
        }
        else{
           slide1_style1= { marginTop: "10px", minHeight: "30vh", borderRadius: "12px" }
        }
        if(this.state.isHoverSlide1_Card2){
            slide1_style2={ marginTop: "10px", minHeight: "30vh", borderRadius: "12px" , boxShadow: "5px 10px 8px rgb(93, 93, 99)"}
        }
        else{
           slide1_style2= { marginTop: "10px", minHeight: "30vh", borderRadius: "12px" }
        }
        if(this.state.isHoverSlide1_Card3){
            slide1_style3={ marginTop: "10px", minHeight: "30vh", borderRadius: "12px" , boxShadow: "5px 10px 8px rgb(93, 93, 99)"}
        }
        else{
           slide1_style3= { marginTop: "10px", minHeight: "30vh", borderRadius: "12px" }
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
           slide2_style1= { marginTop: "10px", minHeight: "30vh", borderRadius: "12px" }
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
           slide2_style3= { marginTop: "10px", minHeight: "30vh", borderRadius: "12px" }
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
        if(this.state.isHoverSlide3_Card3){
            slide3_style3={ marginTop: "10px", minHeight: "30vh", borderRadius: "12px" , boxShadow: "5px 10px 8px rgb(93, 93, 99)"}
        }
        else{
           slide3_style3= { marginTop: "10px", minHeight: "30vh", borderRadius: "12px" }
        }
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
                { backgroundColor: `#C4C4C4`, paddingTop: "10px", paddingBottom: "20px", minHeight: "30vh" }
            } >
            <Slider >
            <Slide index = { 0 } > < div className = "container" >
            <div className = "row" >
            <div className = "col-6 col-md-3" >
            <Link to = "/consultancychildren" >
            <Card style = {
                slide1_style4
            } onMouseEnter ={this.handleHoverSlide1_Card4} onMouseLeave={this.handleHoverSlide1_Card4}>
            <CardBody style = {
                { backgroundColor: `#871B1B`, borderRadius: "12px" }
            } >
            <CardText className = "text-white" > Card4 </CardText> </CardBody > 
            </Card>  
            </Link > 
            </div > 
            <div className = "col-6 col-md-3" >
            <Link to = "/consultancychildren" >
            <Card style = {
               slide1_style1
            } onMouseEnter ={this.handleHoverSlide1_Card1} onMouseLeave={this.handleHoverSlide1_Card1}>
            <CardBody style = {
                { backgroundColor: `#871B1B`, borderRadius: "12px" }
            } >
            <CardText className = "text-white" > Card1 </CardText> 
            </CardBody > </Card> </Link >

            </div > 
            <div className = "col-6 col-md-3" >
            <Link to = "/consultancychildren" >
            <Card style = {
                slide1_style2
            } onMouseEnter ={this.handleHoverSlide1_Card2} onMouseLeave={this.handleHoverSlide1_Card2}>
            <CardBody style = {
                { backgroundColor: `#871B1B`, borderRadius: "12px" }
            } >
            <CardText className = "text-white" > Card2 </CardText> </CardBody > </Card> 
            </Link > 
            </div >
            <div className = "col-6 col-md-3" >
            <Link to = "/consultancychildren" >
            <Card style = {
                slide1_style3
            } onMouseEnter ={this.handleHoverSlide1_Card3} onMouseLeave={this.handleHoverSlide1_Card3}>
            <CardBody style = {
                { backgroundColor: `#871B1B`, borderRadius: "12px" }
            } >
            <CardText className = "text-white" > Card3 </CardText> </CardBody > </Card> 
            </Link > 
            </div > 
            </div > 
            </div > 
            </Slide > 
            <Slide index = { 1 } >
            <div className = "container" > 
            <div className = "row" >
            <div className = "col-6 col-md-3" >
            <Link to = "/consultancychildren" >
            <Card style = {
               slide2_style4
            }  onMouseEnter ={this.handleHoverSlide2_Card4} onMouseLeave={this.handleHoverSlide2_Card4}>
            <CardBody style = {
                { backgroundColor: "red", borderRadius: "12px" }
            } >
            <CardText className = "text-white" > Card4 </CardText> </CardBody > 
            </Card>  
            </Link > </div > 
            <div className = "col-6 col-md-3" >
            <Link to = "/consultancychildren" >
            <Card style = {
               slide2_style1
            } onMouseEnter ={this.handleHoverSlide2_Card1} onMouseLeave={this.handleHoverSlide2_Card1}>
            <CardBody style = {
                { backgroundColor: "red", borderRadius: "12px" }
            } >
            <CardText className = "text-white" > Card1 </CardText> 
            </CardBody > </Card> </Link > 
            </div > 
            <div className = "col-6 col-md-3" >
            <Link to = "/consultancychildren" >
            <Card style = {
                slide2_style2
            } onMouseEnter ={this.handleHoverSlide2_Card2} onMouseLeave={this.handleHoverSlide2_Card2}>
            <CardBody style = {
                { backgroundColor: "red", borderRadius: "12px" }
            } >
            <CardText className = "text-white" > Card2 </CardText> 
            </CardBody > 
            </Card> </Link > 
            </div >
            <div className = "col-6 col-md-3" >
            <Link to = "/consultancychildren" >
            <Card style = {
                slide2_style3
            } onMouseEnter ={this.handleHoverSlide2_Card3} onMouseLeave={this.handleHoverSlide2_Card3}>
            <CardBody style = {
                { backgroundColor: "red", borderRadius: "12px" }
            } >
            <CardText className = "text-white" > Card3 </CardText> </CardBody > 
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
            <Link to = "/consultancychildren" >
            <Card style = {
               slide3_style4
            } onMouseEnter ={this.handleHoverSlide3_Card4} onMouseLeave={this.handleHoverSlide3_Card4}>
            <CardBody style = {
                { backgroundColor: "green", borderRadius: "12px" }
            } >
            <CardText className = "text-white" > Card4 </CardText> </CardBody > </Card> </Link > 
            </div > 
            <div className = "col-6 col-md-3" >
            <Link to = "/consultancychildren" >
            <Card style = {
               slide3_style1
            }  onMouseEnter ={this.handleHoverSlide3_Card1} onMouseLeave={this.handleHoverSlide3_Card1}>
            <CardBody style = {
                { backgroundColor: "green", borderRadius: "12px" }
            } >
            <CardText className = "text-white" > Card1 </CardText> </CardBody > </Card>  </Link > 
            </div > 
            <div className = "col-6 col-md-3" >
            <Link to = "/consultancychildren" >
            <Card style = {
                slide3_style2
            }  onMouseEnter ={this.handleHoverSlide3_Card2} onMouseLeave={this.handleHoverSlide3_Card2}>
            <CardBody style = {
                { backgroundColor: "green", borderRadius: "12px" }
            } >
            <CardText className = "text-white" > Card2 </CardText> </CardBody > 
            </Card> </Link >

            </div >
            <div className = "col-6 col-md-3" >
            <Link to = "/consultancychildren" >
            <Card style = {
                slide3_style3
            }  onMouseEnter ={this.handleHoverSlide3_Card3} onMouseLeave={this.handleHoverSlide3_Card3}>
            <CardBody style = {
                { backgroundColor: "green", borderRadius: "12px" }
            } >
            <CardText className = "text-white" > Card3 </CardText> </CardBody > </Card> </Link >

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

export default Activities;