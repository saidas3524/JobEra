import { createReducer } from './../utility';
import { fromJS} from 'immutable'
import {
    SET_PROFILES
} from '../actions'
export const profiles = createReducer(null, {
    [SET_PROFILES](state,{profiles}) {
        return fromJS(profiles);
    }
});
