import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Alert from "./Alert";

import { connect } from "react-redux";


import {
    alertsSelector
} from '../../../selectors';

import {
    alertRemoveAction
} from '../../../actions';
import { AlertTypes } from '../../../services/ConstantManager';


class AlertsContainer extends Component {

    constructor(props) {
        super(props);
    }

    alertClosedClicked  = (alertInstance)=>{
        this.props.removeAlert(alertInstance)
    }

    render() {
       
        const { alerts} = this.props;


        return (
            <div className="alert-container">
                {alerts && alerts.length>0 && alerts.map((alert)=> <Alert  key={alert.id} id={alert.id}  type = {alert.type}  message={alert.message} onClose={this.alertClosedClicked}/>)}
            </div>

        );
    }
}


const mapStateToProps = (state) => {
    var alerts = alertsSelector(state);
    alerts = alerts ? alerts.toJS() : alerts;
     return {
         alerts:alerts
     }
};
const mapDispatchToProps = (dispatch) => ({
    removeAlert(alertInstance) {
        dispatch(alertRemoveAction(alertInstance));
    }
});

export default connect(
    mapStateToProps,mapDispatchToProps
)(AlertsContainer);