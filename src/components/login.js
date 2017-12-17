import React, { Component } from 'react';
import { connect } from "react-redux";
import logo from '../images/jobEra.png';

import { login } from "../actions";



export class Login extends Component {


    constructor(props){
        super(props);
        this.state = {
            userName: "",
            password: "",
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

    LoginClicked = ()=>{
        this.props.Login({userName:this.state.userName,password:this.state.password});

    }

    RegisterClicked = (event)=>{
        event.preventDefault();
        this.props.history.push("/Register");
    }

    render() {
        const user = {
                        username: this.state.userName,
                        password:this.state.password
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
                                <button type="button" onClick={this.LoginClicked} className="btn btn-primary btn-lg btn-block login-button">Login</button>
                            </div>
                            <div className="login-register">
                                <a href="#" onClick = {this.RegisterClicked}>Register</a>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

var mapStateToProps = (state) => {
    return {

    }
}

var mapDispatchToProps = (dispatch) => ({
    Login(user){
        dispatch(login(user));
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(Login);

