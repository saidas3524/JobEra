import { createReducer } from "../utility";
import { REGISTRATION_STATUS } from "../actions";
import { fromJS } from "immutable";

export const registrationStatus = createReducer(null,{
    [REGISTRATION_STATUS](state,{status,message}){
        return fromJS({status,message});
    }
})