import React from "react";
import Header from "./HeaderComponent";
import { Card, CardBody, CardText} from "reactstrap";

function Aboutus(props){
    return(
       <div>
           <Header/>
           <div style={{marginBottom: "0px", minHeight: "15vh", backgroundColor:`#171F3E`, minWidth: "100vw"}}>
               <div className="container">
                   <div className="row">
                       <div className="col-12 col-sm-6">
                           <h1 style={{marginTop: "25px", color: "white"}}>About Us</h1>
                       </div>
                   </div>
               </div>
              
           </div>
           <div className="container" style={{marginTop: "10vh", marginBottom: "10vh"}}>
                   <div className="row">
                       <div className="col-12" style={{display: "flex", justifyContent: "center"}} >
                           <Card style={{minHeight: "60vh", minWidth: "80vw", backgroundColor: `#C4C4C4`, boxShadow: "5px 10px 15px rgb(93, 93, 99)"}}>
                               <div className="container">
                                   <div className="row">
                                       <div className="col-12 col-md-6">
                                           <h1>Image</h1>
                                       </div>
                                       <div className="col-12 col-md-6">
                                           <CardBody>
                                               <CardText>
                                               <p > < h4 className = "text-white" style={{fontFamily: "Montserrat, sans-serif-800x"}}> Welcome,
            at AnvayaEmpower we believe in providing innovative solutions to your career or technological problems.We broadly offer two kinds of services, as mentioned. </h4></p >
                                               </CardText>
                                           </CardBody>
                                       </div>
                                   </div>
                               </div>
                           </Card>
                       </div>
                   </div>
               </div>
       </div>
    );
}
export default Aboutus;