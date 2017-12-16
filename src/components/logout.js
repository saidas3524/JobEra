import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { removeToken } from "../services";

export class LogOut extends Component {
    click = ()=>{
        removeToken();
        this.props.history.push("/register")
    }
    render() {
        return (
            <h1>
               <button value="logout" onClick = {this.click}/>
            </h1>
        );
    }
}