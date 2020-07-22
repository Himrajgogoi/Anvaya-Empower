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
            CarouselProvider naturalSlideWidth = { 100 }
            totalSlides = { 3 }
            isIntrinsicHeight = "true"
            isPlaying = "true"
            style = {
                { backgroundColor: `#FDF886`, paddingTop: "10px", paddingBottom: "20px", minHeight: "30vh" }
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
            /CarouselProvider>

            <
            Activities / >
            <
            Consulting / >
            <
            Blog / >
            <
            /div >
        )
    }
}





export default Consultancy;