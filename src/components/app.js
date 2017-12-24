import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from "react-redux";

import { isAuthenticated } from "../services";
import { getGreetings } from '../actions';
import { greetingsSelector } from '../selectors/greetingsSelector';
import { Header } from './Header';
import { removeToken } from "../services";
import { Actions,AddProfile } from "../components";
import { userSelector } from '../selectors/userSelector';
import { getUser } from '../actions/setUserInfo';
import {
    Route
    
} from 'react-router-dom';
import SearchProfiles from "../components/SearchProfiles";
export class App extends Component {

    constructor(props) {
        super(props);
    }
    logOutClicked = () => {
        removeToken();
        this.props.history.push("/");
    }
    logoClicked = () => {
        this.props.history.push("/");
    }
    componentWillMount() {
        this.props.getUserInfo();
    }
    actionClicked = (type) => {
        if (type === "search") {
            this.props.history.push("/Search");
        }
        else if (type === "addnew") {
            this.props.history.push("/Add");
        }
    }
    render() {
        const { user } = this.props;
        const {match} = this.props;
        return (
                <div className="app"  >
                    <Header user={user} logoClicked={this.logoClicked} logOutClicked={this.logOutClicked} />
                        <Route exact path={match.path} render={(props) => (<Actions actionClicked={this.actionClicked} {...props}/>)} />
                        <Route  path={`${match.path}search`} component={SearchProfiles}/>
                        <Route  path={`${match.path}Add`} component={AddProfile}/>
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
        user: user
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(App);