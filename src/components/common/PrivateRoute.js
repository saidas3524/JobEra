import React, { Component } from 'react';
import { isAuthenticated } from "../../services";

import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
export const PrivateRoute = ({ component: Component, ...rest })=>{
    return(
        <Route {...rest} render={(props) => (
            isAuthenticated() ? <Component {...props} /> : <Redirect to='/register' />
        )} />
    )
}


export default PrivateRoute;