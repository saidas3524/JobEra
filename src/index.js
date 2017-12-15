import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router } from 'react-router';
import { BrowserRouter, Switch, Route,Redirect } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { getStore } from './getStore';


import { App,Error,PrivateRoute,LogOut } from './components';
import reducers from './reducers';

 import Register from './components/Register/Register';


const store = getStore();
const createStoreWithMiddleware = applyMiddleware()(createStore);


ReactDOM.render((
    <Provider store={store}>
        <BrowserRouter>
            <Switch>
                
                <Route exact path="/Register" component={Register} />
                <PrivateRoute exact path="/" component={App} />
                <PrivateRoute exact path="/logout" component={LogOut} />
                <Route component={Error}/>

            </Switch>
        </BrowserRouter>
    </Provider>
), document.querySelector('.root'));