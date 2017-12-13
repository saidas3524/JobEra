import React, { Component } from 'react';
import "./Register.css";

import { connect } from "react-redux";

import logo from '../../images/jobEra.png';
import {saveUserRegistration} from '../../actions';

export class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            userName: "",
            email: "",
            password: "",
            confirmPassword: ""

        }
    }

    handleChange = (event) => {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }


    RegisterClicked = () => {

        this.props.saveUser(
            {
                name: this.state.name,
                userName: this.state.userName,
                email: this.state.email,
                password: this.state.password,
                confirmPassword: this.state.confirmPassword
            }
        )

    }
    render() {
        var user = {
            name: this.state.name,
            userName: this.state.userName,
            email: this.state.email,
            password: this.state.password,
            confirmPassword: this.state.confirmPassword
        }
        return (
            <div className="container">
                <div className="row main">
                    <div className="panel-heading">
                        <div className="panel-title text-center">

                            <img className="logo_registerPage" src={logo} />
                        </div>
                    </div>
                    <div className="main-login main-center">
                        <form className="form-horizontal" method="post" action="#">

                            <div className="form-group">
                                <label htmlFor="name" className="cols-sm-2 control-label">Your Name</label>
                                <div className="cols-sm-10">
                                    <div className="input-group">
                                        <span className="input-group-addon"><i className="fa fa-user fa" aria-hidden="true"></i></span>
                                        <input type="text" className="form-control" onChange={this.handleChange} name="name" id="name" value={user.name} placeholder="Enter your Name" />
                                    </div>
                                </div>
                            </div>

                            <div className="form-group">
                                <label htmlFor="email" className="cols-sm-2 control-label">Your Email</label>
                                <div className="cols-sm-10">
                                    <div className="input-group">
                                        <span className="input-group-addon"><i className="fa fa-envelope fa" aria-hidden="true"></i></span>
                                        <input type="text" className="form-control" onChange={this.handleChange} name="email" id="email" value={user.email} placeholder="Enter your Email" />
                                    </div>
                                </div>
                            </div>

                            <div className="form-group">
                                <label htmlFor="username" className="cols-sm-2 control-label">Username</label>
                                <div className="cols-sm-10">
                                    <div className="input-group">
                                        <span className="input-group-addon"><i className="fa fa-users fa" aria-hidden="true"></i></span>
                                        <input type="text" className="form-control" onChange={this.handleChange} name="userName" id="username" value={user.userName} placeholder="Enter your Username" />
                                    </div>
                                </div>
                            </div>

                            <div className="form-group">
                                <label htmlFor="password" className="cols-sm-2 control-label">Password</label>
                                <div className="cols-sm-10">
                                    <div className="input-group">
                                        <span className="input-group-addon"><i className="fa fa-lock fa-lg" aria-hidden="true"></i></span>
                                        <input type="password" className="form-control" onChange={this.handleChange} name="password" id="password" value={user.password} placeholder="Enter your Password" />
                                    </div>
                                </div>
                            </div>

                            <div className="form-group">
                                <label htmlFor="confirm" className="cols-sm-2 control-label">Confirm Password</label>
                                <div className="cols-sm-10">
                                    <div className="input-group">
                                        <span className="input-group-addon"><i className="fa fa-lock fa-lg" aria-hidden="true"></i></span>
                                        <input type="password" className="form-control" onChange={this.handleChange} name="confirmPassword" id="confirm" value={user.confirmPassword} placeholder="Confirm your Password" />
                                    </div>
                                </div>
                            </div>

                            <div className="form-group">
                                <button type="button" onClick={this.RegisterClicked} className="btn btn-primary btn-lg btn-block login-button">Register</button>
                            </div>
                            <div className="login-register">
                                <a href="/">Login</a>
                            </div>
                        </form>
                    </div>
                </div>
            </div>);
    }
}

const mapDispatchToProps = (dispatch) => ({
    saveUser(user) {
        dispatch(saveUserRegistration(user));
    }
});

export default connect(null,mapDispatchToProps)(Register);