import React from 'react';

import './Alert.css';
import { AlertTypes } from '../../../services';
var classNames = require('classnames');


const Alert = ({ id,message,type,onClose }) => {
    var classes = classNames({
        'row': true,
        'alert-card-effect': true,
        'alert-card-center': true,
        'alert-make-inner':true,
        'animated':true,
        'fadeInDown':true,
        'alert-info': (type === AlertTypes.INFO),
        'alert-success': (type === AlertTypes.SUCCESS),
        'alert-error': (type === AlertTypes.ERROR)
    });
    return (
            <div className={classes}>
                <div className="col-xs-10">{message}</div>
                <div className="col-xs-1 pull-right" onClick = {()=> onClose(id)}>
                    <i class="fa fa-times" aria-hidden="true" ></i>

                </div>
            </div>



    )
}

export default Alert
