import {SAVE_USER_REGISTRATION,SAVE_PROFILE,LOGIN}   from "../actions";
import { APICallStatus } from "../services";



export const AlertActionMapper = {
    
    SAVE_USER_REGISTRATION:{

        [APICallStatus.Success]: "Registration is Successfull",
        
        
    },
    SAVE_PROFILE :{
        [APICallStatus.Success] : "User Profile saved successfully"
    }
}