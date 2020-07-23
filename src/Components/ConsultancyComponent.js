import React, { Component } from "react";
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext, ButtonPlay } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import Header from "./HeaderComponent";
import Activities from "./ConsultingActivities";
import Consulting from "./Consulting";
import Blog from "./Blog";
import { Card, CardImgOverlay, CardImg, CardBody, CardText, Button, Jumbotron } from "reactstrap";
import { Link } from "react-router-dom";

class Consultancy extends Component {
    render() {
        return ( <
            div >
            <
            Header / >
            <
            Jumbotron style = {
                { backgroundColor: `rgb(3, 3, 41)`, marginBottom: "0px", minHeight: "2vh", paddingLeft: "0px" }
            } >
            <
            div className = "container" >
            <
            div className = "row" >
            <
            div className = "col12 col-sm-6" >
            <
            h1 style = {
                { marginTop: "5px", marginBottom: "5px", marginLeft: "0px" }
            }
            className = "text-white" > Consultancy < /h1> < /
            div > <
            /div> < /
            div > <
            /Jumbotron> <
            CarouselProvider naturalSlideWidth = { 100 }
            totalSlides = { 3 }
            isIntrinsicHeight = "true"
            isPlaying = "true"
            style = {
                { marginTop: "0px", backgroundColor: `#FDF886`, paddingTop: "10px", paddingBottom: "20px", minHeight: "30vh" }
            } >
            <
            Slider >
            <
            Slide index = { 0 } > < h4 > Slide1 < /h4>< /Slide > <
            Slide index = { 1 } >
            <
            h4 > Slide2 < /h4>  < /Slide > <
            Slide index = { 2 } >
            <
            h4 > Slide3 < /h4>  < /Slide > < /
            Slider > <
            /CarouselProvider>  <
            div className = "container"
            style = {
                {
                    backgroundColor: `rgb(3, 3, 41)`,
                    marginBottom: "0px",
                    paddingBottom: "10px",
                    paddingTop: "10px",

                    minWidth: "100vw"
                }
            } >
            <
            div className = "row" >
            <
            div className = "col12 col-sm-6" >
            <
            h2 style = {
                { marginTop: "5px", marginBottom: "5px" }
            }
            className = "text-white" > Consulting Activities < /h2> < /
            div > <
            /div> < /
            div > <
            Activities / >
            <
            div className = "container"
            style = {
                { backgroundColor: `rgb(3, 3, 41)`, marginBottom: "0px", paddingBottom: "10px", paddingTop: "10px", minWidth: "100vw" }
            } >
            <
            div className = "row" >
            <
            div className = "col12 col-sm-6" >
            <
            h2 style = {
                { marginTop: "5px", marginBottom: "5px" }
            }
            className = "text-white" > Consulting < /h2> < /
            div > <
            /div> < /
            div >
            <
            Consulting / >
            <
            div className = "container"
            style = {
                { backgroundColor: `rgb(50, 10, 30)`, marginBottom: "0px", paddingBottom: "10px", paddingTop: "10px", minWidth: "100vw" }
            } >
            <
            div className = "row" >
            <
            div className = "col12 col-sm-6" >
            <
            h2 style = {
                { marginTop: "5px", marginBottom: "5px" }
            }
            className = "text-white" > Blog < /h2> < /
            div > <
            /div> < /
            div >
            <
            Blog / >
            <
            /div >
        )
    }
}





export default Consultancy;