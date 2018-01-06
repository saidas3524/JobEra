import React from 'react';
import { ProfileActions } from "../services";
var classNames = require('classnames');
export const ProfileActionButton = ({ action, onActionClicked }) => {

    const actionClicked = () => {
        onActionClicked(action);
        return false;
    }
    var classes = classNames({
        'fa': true,
        'fa-stack-1x': true,
        'fa-inverse': true,
        'fa-pencil': (action === ProfileActions.Edit),
        'fa-eye': (action === ProfileActions.View),
        'fa-trash-o': (action === ProfileActions.Delete)
    });
    return (
        <a href="#" onClick={actionClicked} ><span className="fa-stack fa-2x">
            <i className="fa fa-circle fa-stack-2x text-primary"></i>
            <i className={classes}></i>
        </span></a>
    )
}

export default ProfileActionButton
