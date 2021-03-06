import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router } from 'react-router';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import '../web.config';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.min.js';
import '../node_modules/jquery/dist/jquery.min.js';

import './animate.css';
import { getStore } from './getStore';
import App from "./components/app";

import Login from "./components/login";


import { Error, PrivateRoute, LogOut, NonAuthenticatedRoute, Spinner } from './components';
import reducers from './reducers';

import Register from './components/Register/Register';


const store = getStore();
const createStoreWithMiddleware = applyMiddleware()(createStore);


ReactDOM.render((
    <Provider store={store}>
        <BrowserRouter>
            <div>
                <Switch>

                    <NonAuthenticatedRoute exact path="/Register" component={Register} />
                    <NonAuthenticatedRoute exact path="/Login" component={Login} />
                    <PrivateRoute path="/" component={App} />
                    <PrivateRoute exact path="/logout" component={LogOut} />


                </Switch>
            </div>
        </BrowserRouter>
    </Provider>
), document.querySelector('.root'));