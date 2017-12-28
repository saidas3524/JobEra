import { createReducer } from './../utility';
import { fromJS} from 'immutable';
import {
    incrementPendingAPICalls,decrementPendingAPICalls,INCREMENT_NO_OF_CALLS,DECREMENT_NO_OF_CALLS
} from '../actions'
export const pendingAPICalls = createReducer(null, {
    [INCREMENT_NO_OF_CALLS](state) {
        if(state === null || state === undefined) return fromJS(1);
        return fromJS(state+1);
    },
    [DECREMENT_NO_OF_CALLS](state) {
        if(state === null || state === undefined) return fromJS(0);
        return fromJS(state-1);
    }
});