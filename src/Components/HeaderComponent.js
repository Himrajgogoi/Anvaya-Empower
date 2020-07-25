import React, { Component } from "react";
import { Navbar, NavbarBrand, Nav, NavItem, NavbarToggler, Collapse, Button, Dropdown, DropdownMenu, DropdownItem, DropdownToggle } from "reactstrap";
import { NavLink } from "react-router-dom";

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isNavOpen: false,
            isConsultNavOpen: false,
            isHover1: false,
            isHover2: false,
            isHover3: false,
            isHover4: false,

            isHoverChild1: false,
            isHoverChild2: false,
            isHoverChild3: false,
        }
        this.handleNav = this.handleNav.bind(this);
        this.handleCon = this.handleCon.bind(this);
        this.toggleHover1 = this.toggleHover1.bind(this);
        this.toggleHover2 = this.toggleHover2.bind(this);
        this.toggleHover3 = this.toggleHover3.bind(this);
        this.toggleHover4 = this.toggleHover4.bind(this);
        this.toggleChild1 = this.toggleChild1.bind(this);
        this.toggleChild2 = this.toggleChild2.bind(this);
        this.toggleChild3 = this.toggleChild3.bind(this);

    }
    handleNav() {
        this.setState({ isNavOpen: !this.state.isNavOpen });
    }
    handleCon() {
        this.setState({ isConsultNavOpen: !this.state.isConsultNavOpen });
    }
    toggleHover1() {
        this.setState({ isHover1: !this.state.isHover1 });
    }
    toggleHover2() {
        this.setState({ isHover2: !this.state.isHover2 });
    }
    toggleHover3() {
        this.setState({ isHover3: !this.state.isHover3 });
    }
    toggleHover4() {
        this.setState({ isHover4: !this.state.isHover4 });
    }
    toggleChild1() {
        this.setState({ isHoverChild1: !this.state.isHoverChild1 });
    }
    toggleChild2() {
        this.setState({ isHoverChild2: !this.state.isHoverChild2 });
    }
    toggleChild3() {
        this.setState({ isHoverChild3: !this.state.isHoverChild3 });
    }

    render() {
        var linkstyle1;
        var linkstyle2;
        var linkstyle3;
        var linkstyle4;
        var childstyle1;
        var childstyle2;
        var childstyle3;

        if (this.state.isHover1) {
            linkstyle1 = { paddingLeft: "10px", backgroundColor: `rgb(7, 194, 184)` };
        } else {
            linkstyle1 = { backgroundColor: "black" };
        }

        if (this.state.isHover2) {
            linkstyle2 = { paddingLeft: "10px", backgroundColor: "rgb(7, 194, 184)" };
        } else {
            linkstyle2 = { backgroundColor: "black" };
        }

        if (this.state.isHover3) {
            linkstyle3 = { paddingLeft: "10px", backgroundColor: "rgb(7, 194, 184)" };
        } else {
            linkstyle3 = { backgroundColor: "black" };
        }

        if (this.state.isHover4) {
            linkstyle4 = { paddingLeft: "10px", backgroundColor: "rgb(7, 194, 184)" };
        } else {
            linkstyle4 = { backgroundColor: "black" };
        }
        if (this.state.isHoverChild1) {
            childstyle1 = { paddingLeft: "10px", backgroundColor: "rgb(7, 194, 184)" };
        } else {
            childstyle1 = { backgroundColor: "black" };
        }
        if (this.state.isHoverChild2) {
            childstyle2 = { paddingLeft: "10px", backgroundColor: "rgb(7, 194, 184)" };
        } else {
            childstyle2 = { backgroundColor: "black" };
        }
        if (this.state.isHoverChild3) {
            childstyle3 = { paddingLeft: "10px", backgroundColor: "rgb(7, 194, 184)" };
        } else {
            childstyle3 = { backgroundColor: "black" };
        }

        return ( <div >
            <Navbar expand = "lg" style = {
                { backgroundColor: "black" }
            } >
            <div className = "container">

            <NavbarBrand > < h4 className = "text-white" >
            Anvaya - Empower </h4></NavbarBrand>


            <NavbarToggler onClick = { this.handleNav } > < span className = "fa fa-arrow-down fa-lg d-inline"
            style = {
                { color: "white" }
            } > </span> </NavbarToggler > 
            <Collapse isOpen = { this.state.isNavOpen }
            navbar >
            <Nav navbar >

            <NavItem >

            <NavLink to = "./consultancy"
            className = "nav-link"
            onMouseEnter = { this.toggleHover1 }
            onMouseLeave = { this.toggleHover1 }
            style = {
                linkstyle1
            } >
            <h4 className = "text-white" >
            Consultancy <span onClick = { this.handleCon }
            className = "fa fa-arrow-down"
            style = {
                { color: "white", paddingLeft: "10px" }
            } > </span> </h4 >  </NavLink > 
            <Collapse isOpen = { this.state.isConsultNavOpen } >

            <NavItem onMouseEnter = { this.toggleChild1 }
            onMouseLeave = { this.toggleChild1 }
            style = {
                childstyle1
            } >
            <NavLink to = "/home"
            className = "nav-link text-white" > Dummy </NavLink> 
            </NavItem >
            <NavItem onMouseEnter = { this.toggleChild2 }
            onMouseLeave = { this.toggleChild2 }
            style = {
                childstyle2
            } >
            <NavLink to = "/home"
            className = "nav-link text-white" > Dummy </NavLink> 
            </NavItem >

            <NavItem onMouseEnter = { this.toggleChild3 }
            onMouseLeave = { this.toggleChild3 }
            style = {
                childstyle3
            } >
            <NavLink to = "/home"
            className = "nav-link text-white" > Dummy </NavLink>  
            </NavItem > </Collapse> 
            </NavItem >
            <NavItem >
            <NavLink to = "./technologies"
            className = "nav-link text-white"
            onMouseEnter = { this.toggleHover2 }
            onMouseLeave = { this.toggleHover2 }
            style = {
                linkstyle2
            } >
            <h4 > Technologies </h4></NavLink >
            </NavItem>  
            <NavItem >

            <NavLink to = "./aboutus"
            className = "nav-link text-white"
            onMouseEnter = { this.toggleHover3 }
            onMouseLeave = { this.toggleHover3 }
            style = {
                linkstyle3
            } >
            <h4 > About us </h4></NavLink >
            </NavItem>  
            <NavItem >
            <NavLink to = "./contactus"
            className = "nav-link text-white"
            onMouseEnter = { this.toggleHover4 }
            onMouseLeave = { this.toggleHover4 }
            style = {
                linkstyle4
            } >
            <h4 > Contact Us </h4></NavLink >
            </NavItem >
            </Nav > 
            </Collapse>  
            </div > 
            </Navbar> 
            </div >
        )
    }
}
export default Header;