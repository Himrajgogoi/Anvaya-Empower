import React, { Component } from "react";
import Home from "./HomeComponent";

import Consultancy from "./ConsultancyComponent";
import Technologies from "./TechnologiesComponent";
import ConsultancySectors from "./ConsultancySectors";
import OurServiceAndProduct from "./OurServiceAndProduct";
import ResearchAndDevelopment from "./Research&Development";
import TrackingDevices from "./TrackingDevices";
import TrainingAndLiveProjects from "./TrainingAndLiveProjects";
import ConsultancyService from "./ConsultancyService";
import BlogChildren from "./BlogChildren";
import Aboutus from "./AboutusComponent";
import Contactus from "./ContactusComponent";
import { Switch, Route, Redirect } from "react-router-dom";

class Main extends Component {
    render() {
        return ( <>

            <Switch >
            <Route path = "/home"
            component = { Home }
            /> 
            <Route path = "/consultancy"
            component = { Consultancy }
            /> 
            <Route path = "/technologies"
            component = { Technologies }
            />
             
            <Route path="/ConsultancySectors/:id" component={ConsultancySectors}/>
            <Route path="/ConsultancyServices/:id" component={ConsultancyService}/>
            <Route path = "/BlogChildren" component={BlogChildren}/>

            <Route path = "/OurServiceAndProduct" component={OurServiceAndProduct}/>
            <Route path="/ResearchAndDevelopment" component={ResearchAndDevelopment}/>
            <Route path="/TrainingAndLiveProjects" component={TrainingAndLiveProjects}/>
            <Route path="/TrackingDevices" component={TrackingDevices}/>
            
            <Route path = "/aboutus" component={Aboutus}/>
            <Route path = "/contactus" component={Contactus}/>  
            <Redirect to = "/home" />
            </Switch>
            </ >
        )
    }
}

export default Main;