import React, { Component } from "react";
import Home from "./HomeComponent";
import Consultancy from "./ConsultancyComponent";
import Technologies from "./TechnologiesComponent";
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
            <Redirect to = "/home" />
            </Switch> 
            </ >
        )
    }
}

export default Main;