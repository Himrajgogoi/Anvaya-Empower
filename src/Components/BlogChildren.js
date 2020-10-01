import React, {Component} from "react";
import Header from "./HeaderComponent";
import { CarouselProvider, Slider, Slide} from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import Foter from "./Footer";
import back from "../images/background-anvaya.png";


class BlogChildren extends Component{

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
                                <h1 style={{marginTop: "25px", color: "white", fontFamily: "Montserrat, sans-serif", fontWeight: "800"}}>Blog</h1>
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
                <div className="container" style={{paddingTop: "10px"}}>
                    <div className="row">
                        <div className="col-12" >
                            <h2 style={{display: "flex", justifyContent:"center", fontFamily: "Montserrat, sans-serif", fontWeight: "600"}}>Our Expertise</h2>
                            <span className = "fa fa-arrow-down fa-lg" style={{display: "flex", justifyContent:"center"}}></span>
                        </div>
                    </div>
                </div>
                <div style={{marginTop:"50px", minWidth: "100vw",  minHeight: "50vh", backgroundColor: `#B8EFA4`, backgroundImage: "url('https://images.pexels.com/photos/2312369/pexels-photo-2312369.jpeg?auto=compress&cs=tinysrgb&h=650&w=940')"
            ,backgroundSize: "cover", backgroundRepeat: "no repeat", backgroundPosition: "center center",opacity: "0.8", backdropFilter: "blur(8px)"}}>

                  <div className="container" style={{paddingTop:"20vh"}}>
                        <div className="row">
                            <div className="col-12">
                                 <p > < h4 style={{fontFamily: "Montserrat, sans-serif-800x", color: "yellow"}}> Welcome,
                 at AnvayaEmpower we believe in providing innovative solutions to your career or technological problems.We broadly offer two kinds of services, as mentioned. </h4></p >
                            <div className="container" > 
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Foter/> 
            </div>
        );
    }

}
export default BlogChildren;