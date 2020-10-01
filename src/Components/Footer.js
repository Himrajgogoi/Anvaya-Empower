import React, {Component} from "react";
import {Link} from "react-router-dom";

class Foter extends Component{
  
    constructor(props){
        super(props);
        this.state={}
    }

    render(){
        return(
            <div className="Footer" style={{backgroundColor: `rgb(67, 7, 7)`, marginTop: "10vh", paddingBottom: "2vh"}}>
                <div className="container" style={{minHeight: "30vh", minWidth: "100vw", paddingLeft:"5vw", paddingTop: "5vh"}}>
                    <div className="row">
                        <div className="col-6 col-md-3">
                           <Link to ="/consultancy" style={{color:"white"}}><h5 style={{textDecoration: "underline"}}>Consultancy</h5></Link>
                           <div className="container" style={{marginTop:'4vh',marginBottom:"4vh"}}>
                               <div className="row">
                                   <div className="col-12">
                                       <Link to="/ConsultancySectors"><h6 style={{color:"white"}}>Consultancy By Sector</h6></Link>
                                       <Link to="/ConsultancyServices"><h6 style={{color:"white"}}>Consultancy Service</h6></Link>
                                       <Link to="/BlogChildren"><h6  style={{color:"white"}}>Blogs</h6></Link>
                                   </div>
                               </div>
                           </div>
                        </div>
                        <div className="col-6 col-md-3">
                            <Link to="/technologies"  style={{color:"white"}}><h5 style={{textDecoration: "underline"}}>Technologies</h5></Link>
                            <div className="container"  style={{marginTop:'4vh', marginBottom:"4vh"}}>
                               <div className="row">
                                   <div className="col-12">
                                       <Link to="/OurServiceAndProduct"><h6 style={{color:"white"}}>OurServiceAndProduct</h6></Link>
                                       <Link to="/ResearchAndDevelopment"><h6 style={{color:"white"}}>ResearchAndDevelopment</h6></Link>
                                       <Link to="/TrainingAndLiveProjects"><h6  style={{color:"white"}}>Training And Live Projects</h6></Link>
                                       {/* <Link to="/TrackingDevices"><h6 style={{color:"white"}}>Tracking Devices</h6></Link> */}
                                   </div>
                               </div>
                           </div>
                        </div>
                        <div className="col-6 col-md-3" style={{marginBottom:"12px"}}>
                            <Link to="/aboutus"  style={{color:"white"}}><h5 style={{textDecoration: "underline"}}>About us</h5></Link>
                        </div>
                        <div className="col-6 col-md-3" style={{marginBottom:"12px"}}>
                            <Link to="/contactus"  style={{color:"white"}}><h5 style={{textDecoration: "underline"}}>Contact Us</h5></Link>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12" style={{display: "flex",flexDirection: "row", justifyContent: "center"}}>
                            <h4 style={{color:"white", fontFamily: "Montserrat, sans-serif"}} >Follow us at:-</h4>
                            <span className="fa fa-facebook fa-lg" style={{color: "white", margin: "7px"}}></span>
                            <span className="fa fa-instagram fa-lg" style={{color: "white", margin: "7px"}}></span>
                        </div>
                    </div>
                    
                </div>
            </div>
        );
    }

}

export default Foter;