import React, {Component} from "react";
import Header from "./HeaderComponent";
import { CarouselProvider, Slider, Slide} from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';


class BlogChildren extends Component{

    constructor(props){
        super(props);
        this.state={}
    }
    render(){
        return(
            <div>
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
                             { marginTop: "0px", backgroundColor: `#C4C4C4`, paddingTop: "10px", paddingBottom: "20px", minHeight: "30vh" }
                } >
                    <Slider >
                        <Slide index = { 0 } > < h4 > Slide1 </h4></Slide > 
                        <Slide index = { 1 } >
                                <h4 > Slide2 </h4>  
                        </Slide > 
                        <Slide index = { 2 } >
                                <h4 > Slide3 </h4>  </Slide > 
                    </Slider > 
                </CarouselProvider>
                <div className="container" style={{paddingTop: "10px"}}>
                    <div className="row">
                        <div className="col-12" >
                            <h2 style={{display: "flex", justifyContent:"center"}}>Our Expertise</h2>
                            <span className = "fa fa-arrow-down fa-lg" style={{display: "flex", justifyContent:"center"}}></span>
                        </div>
                    </div>
                </div>
                <div style={{marginTop:"50px", minWidth: "100vw",  minHeight: "50vh", backgroundColor: `#B8EFA4`}}>
                  <div className="container" >
                        <div className="row">
                            <div className="col-12">
                                <h1>Dummy</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

}
export default BlogChildren;