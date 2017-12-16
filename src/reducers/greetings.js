import { createReducer } from "../utility";
import { SET_GREETINGS } from "../actions";
import { fromJS } from "immutable";

export const greetings = createReducer(null,{
    [SET_GREETINGS](state,{greetings}){
        return fromJS(greetings);
    }
})