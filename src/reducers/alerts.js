import { createReducer } from './../utility';
import { fromJS} from 'immutable';
import {
    ADD_ALERT,REMOVE_ALERT,REMOVE_ALL_ALERTS
} from '../actions'

const uuidv4 = require('uuid/v4');



export const alerts = createReducer(null, {
    [ADD_ALERT](state,{alert}) {
        alert.id = uuidv4();
        if(state === null || state === undefined) return fromJS([alert]);
        return fromJS(state.push(alert));
    },
    [REMOVE_ALERT](state,{alert}) {
        if(state === null || state === undefined) return;
        var newArray = state.toJS().filter(function(a){return a.id !== alert})
        return fromJS(newArray);
    }
});