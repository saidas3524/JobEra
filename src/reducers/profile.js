import { createReducer } from './../utility';
import { fromJS} from 'immutable'
import {
    SET_PROFILE
} from '../actions'
export const profile = createReducer(null, {
    [SET_PROFILE](state,{profile}) {
        return fromJS(profile);
    }
});
