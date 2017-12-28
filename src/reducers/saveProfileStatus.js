import { createReducer } from "../utility";
import { SAVE_PROFILE_STATUS } from "../actions";
import { fromJS } from "immutable";

export const saveProfileStatus = createReducer(null,{
    [SAVE_PROFILE_STATUS](state,{status,message}){
        return fromJS({status,message});
    }
})