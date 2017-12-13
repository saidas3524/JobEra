import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router } from 'react-router';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { getStore } from './getStore';


import { Register,App,Error } from './components';
import reducers from './reducers';

// import App from './components/App';


const store = getStore();
const createStoreWithMiddleware = applyMiddleware()(createStore);


ReactDOM.render((
    <Provider store={store}>
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={App} />
                <Route exact path="/Register" component={Register} />
                <Route component={Error}/>

            </Switch>
        </BrowserRouter>
    </Provider>
), document.querySelector('.root'));