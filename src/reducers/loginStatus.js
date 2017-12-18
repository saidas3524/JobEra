import { createReducer } from "../utility";
import { LOGIN_STATUS } from "../actions";
import { fromJS } from "immutable";

export const loginStatus = createReducer(null,{
    [LOGIN_STATUS](state,{status,message}){
        return fromJS({status,message});
    }
})