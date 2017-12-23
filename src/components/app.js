import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from "react-redux";

import { isAuthenticated } from "../services";
import { getGreetings } from '../actions';
import { greetingsSelector } from '../selectors/greetingsSelector';
import { Header } from './Header';
import { removeToken } from "../services";
import { Actions } from "../components";
import { userSelector } from '../selectors/userSelector';
import { getUser } from '../actions/setUserInfo';
export class App extends Component {

    constructor(props) {
        super(props);
    }
    logOutClicked = ()=>{
        removeToken();
        this.props.history.push("/");
    }
    componentWillMount() {
        this.props.getUserInfo();
    }
    render() {
        const { user } = this.props;
        return (
            <div  className="app"  >
                <Header user={user} logOutClicked = {this.logOutClicked}/>
                <Actions/>
            </div>
           

        );
    }
}

const mapDispatchToProps = (dispatch) => (
    {
        getUserInfo() {
            dispatch(getUser());
        }
    }
);

const mapStateToProps = (state) => {
    var user = userSelector(state);
    user = user ? user.toJS() : user
    return {
        user:user
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(App);