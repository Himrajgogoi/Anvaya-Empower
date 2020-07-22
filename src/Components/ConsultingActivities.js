import React, { Component } from "react";
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext, ButtonPlay } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import Header from "./HeaderComponent";
import { Card, CardImgOverlay, CardImg, CardBody, CardText, Button, Jumbotron } from "reactstrap";
import { Link } from "react-router-dom";

class Activities extends Component {
    render() {
        return ( <
            div >
            <
            CarouselProvider naturalSlideWidth = { 100 }
            totalSlides = { 3 }
            isIntrinsicHeight = "true"
            isPlaying = "true"
            style = {
                { backgroundColor: `#C4C4C4`, paddingTop: "10px", paddingBottom: "20px", minHeight: "30vh" }
            } >
            <
            Slider >
            <
            Slide index = { 0 } > < div className = "container" >
            <
            div className = "row" >
            <
            div className = "col-6 col-md-3" >
            <
            Link to = "/home" >
            <
            Card style = {
                { marginTop: "10px", minHeight: "30vh" }
            } >
            <
            CardBody style = {
                { backgroundColor: `#871B1B` }
            } >
            <
            CardText className = "text-white" > Card4 < /CardText> < /
            CardBody > <
            /Card>  < /
            Link > <
            /
            div > <
            div className = "col-6 col-md-3" >
            <
            Link to = "/home" >
            <
            Card style = {
                { marginTop: "10px", minHeight: "30vh" }
            } >
            <
            CardBody style = {
                { backgroundColor: `#871B1B` }
            } >
            <
            CardText className = "text-white" > Card1 < /CardText> < /
            CardBody > <
            /Card> < /
            Link >

            <
            /
            div > <
            div className = "col-6 col-md-3" >
            <
            Link to = "/home" >
            <
            Card style = {
                { marginTop: "10px", minHeight: "30vh" }
            } >
            <
            CardBody style = {
                { backgroundColor: `#871B1B` }
            } >
            <
            CardText className = "text-white" > Card2 < /CardText> < /
            CardBody > <
            /Card> < /
            Link > <
            /
            div >
            <
            div className = "col-6 col-md-3" >
            <
            Link to = "/home" >
            <
            Card style = {
                { marginTop: "10px", minHeight: "30vh" }
            } >
            <
            CardBody style = {
                { backgroundColor: `#871B1B` }
            } >
            <
            CardText className = "text-white" > Card3 < /CardText> < /
            CardBody > <
            /Card> < /
            Link > <
            /
            div > < /
            div > < /
            div > < /Slide > <
            Slide index = { 1 } >
            <
            div className = "container" > <
            div className = "row" >
            <
            div className = "col-6 col-md-3" >
            <
            Link to = "/home" >
            <
            Card style = {
                { marginTop: "10px", minHeight: "30vh" }
            } >
            <
            CardBody style = {
                { backgroundColor: "red" }
            } >
            <
            CardText className = "text-white" > Card4 < /CardText> < /
            CardBody > <
            /Card>  < /
            Link > <
            /
            div > <
            div className = "col-6 col-md-3" >
            <
            Link to = "/home" >
            <
            Card style = {
                { marginTop: "10px", minHeight: "30vh" }
            } >
            <
            CardBody style = {
                { backgroundColor: "red" }
            } >
            <
            CardText className = "text-white" > Card1 < /CardText> < /
            CardBody > <
            /Card> < /
            Link > <
            /
            div > <
            div className = "col-6 col-md-3" >
            <
            Link to = "/home" >
            <
            Card style = {
                { marginTop: "10px", minHeight: "30vh" }
            } >
            <
            CardBody style = {
                { backgroundColor: "red" }
            } >
            <
            CardText className = "text-white" > Card2 < /CardText> < /
            CardBody > <
            /Card> < /
            Link > <
            /
            div >
            <
            div className = "col-6 col-md-3" >
            <
            Link to = "/home" >
            <
            Card style = {
                { marginTop: "10px", minHeight: "30vh" }
            } >
            <
            CardBody style = {
                { backgroundColor: "red" }
            } >
            <
            CardText className = "text-white" > Card3 < /CardText> < /
            CardBody > <
            /Card> < /
            Link > <
            /
            div > < /
            div > < /
            div > < /Slide> <
            Slide index = { 2 } >
            <
            div className = "container" > <
            div className = "row" >
            <
            div className = "col-6 col-md-3" >
            <
            Link to = "/home" >
            <
            Card style = {
                { marginTop: "10px", minHeight: "30vh" }
            } >
            <
            CardBody style = {
                { backgroundColor: "green" }
            } >
            <
            CardText className = "text-white" > Card4 < /CardText> < /
            CardBody > <
            /Card> < /
            Link > <
            /
            div > <
            div className = "col-6 col-md-3" >
            <
            Link to = "/home" >
            <
            Card style = {
                { marginTop: "10px", minHeight: "30vh" }
            } >
            <
            CardBody style = {
                { backgroundColor: "green" }
            } >
            <
            CardText className = "text-white" > Card1 < /CardText> < /
            CardBody > <
            /Card>  < /
            Link > <
            /
            div > <
            div className = "col-6 col-md-3" >
            <
            Link to = "/home" >
            <
            Card style = {
                { marginTop: "10px", minHeight: "30vh" }
            } >
            <
            CardBody style = {
                { backgroundColor: "green" }
            } >
            <
            CardText className = "text-white" > Card2 < /CardText> < /
            CardBody > <
            /Card> < /
            Link >

            <
            /
            div >
            <
            div className = "col-6 col-md-3" >
            <
            Link to = "/home" >
            <
            Card style = {
                { marginTop: "10px", minHeight: "30vh" }
            } >
            <
            CardBody style = {
                { backgroundColor: "green" }
            } >
            <
            CardText className = "text-white" > Card3 < /CardText> < /
            CardBody > <
            /Card> < /
            Link > <
            /
            div > < /
            div > < /
            div > < /Slide> < /
            Slider > < /
            CarouselProvider >
            <
            /div>
        );
    }
}

export default Activities;