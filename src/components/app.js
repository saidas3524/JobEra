import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { isAuthenticated } from "../services";

export class App extends Component {

    constructor(props){
        super(props);
    }
    render() {
        return (
            <h1>
                this is main page
                
            </h1>
        );
    }
}



export default App;