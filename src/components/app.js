import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from "react-redux";

import { isAuthenticated } from "../services";
import { getGreetings } from '../actions';
import { greetingsSelector } from '../selectors/greetingsSelector';
import { Header } from './Header';



export class App extends Component {

    constructor(props){
        super(props);
    }

    componentWillMount(){
        this.props.callGreetings();
    }
    render() {
        const {greetings} = this.props;
        return (
            <div>
                <Header/>
            <h1>

                {greetings && greetings.map((greet)=> {return (<div> this is greet one </div>)})}
                
            </h1>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch)=>(
    {
        callGreetings(){
            dispatch(getGreetings());
        }
    }
);

const mapStateToProps = (state)=>{
    var greetings = greetingsSelector(state);
    greetings = greetings? greetings.toJS(): greetings
    return{
        ...greetings
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(App);