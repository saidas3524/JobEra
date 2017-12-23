import React, { Component } from 'react';
import { Navbar, NavItem, Nav, MenuItem, NavDropdown } from 'react-bootstrap';
import logo from '../images/jobEra_white.png';
import './Header.css';

import { connect } from "react-redux";
import { logout } from "../actions";
import { removeToken } from "../services";



export class Header extends Component {

    constructor(props){
        super(props);
    }

    logoClicked = () => {
        this.props.history.push("/");
    }

    logOutClicked = () => {

       this.props.logOutClicked();
    }

    render() {
        return (
            <div className="animated fadeInDown">
                <Navbar fluid inverse collapseOnSelect>
                    <Navbar.Header>
                        <div className="row">
                            <div className="col-xs-10">
                                <img id="logo" onClick={this.logoClicked} className="center-block logo_registerPage" src={logo} />
                            </div>
                            <div className="col-xs-2">
                                <Navbar.Toggle />
                            </div>

                        </div>
                    </Navbar.Header>
                    <Navbar.Collapse>
                        <Nav pullRight>
                            <NavItem eventKey={1} href="#">SEARCH</NavItem>
                            <NavItem eventKey={2} href="#">ADD</NavItem>
                            <NavDropdown eventKey={3} title="HELLO" id="basic-nav-dropdown">
                                <MenuItem onClick={this.viewProfileClicked} eventKey={3.1}>MY PROFILE</MenuItem>

                                <MenuItem divider />
                                <MenuItem eventKey={3.3} onClick={this.logOutClicked}>LOG OUT</MenuItem>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        );
    }
}

const mapStateToProps = (state)=>{
}


const mapDispatchToProps = (dispatch) => (
    {
    }
)
export default connect(mapStateToProps,mapDispatchToProps)(Header);
