import { createReducer } from './../utility';
import { fromJS} from 'immutable'
import {
    SET_USER
} from '../actions'
import { SET_TOKEN } from '../actions/setUserInfo';
export const userInfo = createReducer(null, {
    [SET_USER](state,{userInfo}) {
        return fromJS(userInfo);
    }
});

export const token = createReducer(null, {
    [SET_TOKEN](state,{token}) {
        return fromJS(token);
    }
});