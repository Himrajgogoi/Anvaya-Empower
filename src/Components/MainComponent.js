import React, { Component } from "react";
import Home from "./HomeComponent";
import Consultancy from "./ConsultancyComponent";
import Technologies from "./TechnologiesComponent";
import ConsultancyChildren from "./ActivitiesChildren";
import TechnologiesChildren from "./TechnologiesChildren";
import ConsultingChildren from "./ConsultingChildren";
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
            <Route path="/ActivitiesChildren" component={ConsultancyChildren}/>
            <Route path="/ConsultingChildren" component={ConsultingChildren}/>
            <Route path = "/BlogChildren" component={BlogChildren}/>
            <Route path = "/technologieschildren" component={TechnologiesChildren}/>
            <Route path = "/aboutus" component={Aboutus}/>
            <Route path = "/contactus" component={Contactus}/>  
            <Redirect to = "/home" />
            </Switch> 
            </ >
        )
    }
}

export default Main;