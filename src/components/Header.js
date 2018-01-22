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
        this.props.logoClicked();
    }

    logOutClicked = () => {

       this.props.logOutClicked();
    }
    searchClicked = () => {

        this.props.actionClicked("search");
    }
    addProfileClicked=()=>{
        this.props.actionClicked("addnew");
    } 

    render() {
        const {user} = this.props;
        return (
            <div className="animated fadeInDown">
                <Navbar fluid inverse collapseOnSelect>
                    <Navbar.Header>
                        <div className="row">
                            <div className="col-xs-10">
                                <img id="logo" style={{cursor:"pointer"}} onClick={this.logoClicked} className="center-block logo_registerPage" src={logo} />
                            </div>
                            <div className="col-xs-2">
                                <Navbar.Toggle />
                            </div>

                        </div>
                    </Navbar.Header>
                    <Navbar.Collapse>
                        <Nav pullRight>
                            <NavItem eventKey={1} onClick={this.logoClicked}>HOME</NavItem>
                            <NavItem eventKey={1} onClick={this.searchClicked}>SEARCH</NavItem>
                            <NavItem eventKey={2} onClick={this.addProfileClicked}>ADD</NavItem>
                            <NavDropdown  eventKey={3} title={user? user.name.toUpperCase():"user"} id="basic-nav-dropdown">
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
