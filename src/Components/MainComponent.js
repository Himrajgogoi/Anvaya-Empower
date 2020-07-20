import React, { Component } from "react";
import Header from "./HeaderComponent";
import Home from "./HomeComponent";
import Consultancy from "./ConsultancyComponent";
import { Switch, Route, Redirect } from "react-router-dom";

class Main extends Component {
    render() {
        return ( < >
            <
            Header / >
            <
            Switch >
            <
            Route path = "/home"
            component = { Home }
            /> <
            Route path = "/consultancy"
            component = { Consultancy }
            /> <
            Redirect to = "/home" / >
            <
            /Switch> < / >
        )
    }
}

export default Main;