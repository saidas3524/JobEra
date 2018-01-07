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
import AddProfile from "../components/AddProfile";
import {
    Route

} from 'react-router-dom';
import SearchProfiles from "../components/SearchProfiles";
import { Spinner } from './common/spinner';
import { pendingAPICallsSelector } from '../selectors/pendingAPICallsSelector';
import  ViewProfile  from './ViewProfile';
import { ProfileModes } from '../services/ConstantManager';
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
        const { match } = this.props;
        return (
            <div className="app"  >

                {this.props.pendingCalls > 0 && <Spinner />}
                <Header user={user} logoClicked={this.logoClicked} actionClicked={this.actionClicked} logOutClicked={this.logOutClicked} />
                <Route exact path={match.path} render={(props) => (<Actions actionClicked={this.actionClicked} {...props} />)} />
                <Route path={`${match.path}search`}  component={SearchProfiles} />
                <Route path={`${match.path}View/:id`}render={(props)=>(<AddProfile mode={ProfileModes.VIEW}{...props}/>)}  />
                <Route path={`${match.path}Edit/:id`}render={(props)=>(<AddProfile mode={ProfileModes.EDIT} {...props}/>)}  />

                <Route path={`${match.path}Add`} render={(props)=>(<AddProfile mode={ProfileModes.CREATE} {...props}/>)}   />

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
    var pendingCalls = pendingAPICallsSelector(state);
    return {
        user: user,
        pendingCalls: pendingCalls
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(App);