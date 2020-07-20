import React from 'react';
import Main from "./Components/MainComponent.js";
import { BrowserRouter } from "react-router-dom";
import logo from './logo.svg';
import './App.css';

function App() {
    return ( <
        div >
        <
        BrowserRouter >
        <
        Main / >
        <
        /BrowserRouter>

        <
        /div>
    );
}

export default App;