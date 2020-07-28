import React from "react";
import Header from "./HeaderComponent";
import { Card, CardBody, CardText} from "reactstrap";

function Contactus(props){
     return(
         <div>
             <Header/>
           <div style={{marginBottom: "0px", minHeight: "15vh", backgroundColor:`#E1CD1A`, minWidth: "100vw"}}>
               <div className="container">
                   <div className="row">
                       <div className="col-12 col-sm-6">
                           <h1 style={{marginTop: "25px", color: "white"}}>Contact Us</h1>
                       </div>
                   </div>
               </div>              
           </div>
           <div className="container" style={{marginTop: "10vh"}}>
               <div className="row">
                   <div className="col-12 col-md-6">
                       <Card style={{minHeight: "40vh", minWidth: "30vw", backgroundColor: `#C4C4C4`, boxShadow: "5px 10px 8px rgb(93, 93, 99)"}}>
                           <CardBody>
                               <CardText>
                                   <h1>Info</h1>
                               </CardText>
                           </CardBody>
                       </Card>
                   </div>
               </div>
           </div>
         </div>
     )
}
export default Contactus;