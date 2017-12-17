import React, { Component } from 'react';
import { isAuthenticated } from "../../services";

import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
export const NonAuthenticatedRoute = ({ component: Component, ...rest })=>{
    return(
        <Route {...rest} render={(props) => (
            isAuthenticated() ?  <Redirect to='/' /> : <Component {...props} />
        )} />
    )
}


export default NonAuthenticatedRoute;