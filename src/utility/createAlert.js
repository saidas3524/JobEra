import { APICallStatus,AlertTypes,AlertActionMapper } from "../services";

export const createAlert = (action,callStatus,message)=>{
    var type = callStatus == APICallStatus.Success ? AlertTypes.SUCCESS : AlertTypes.ERROR;
    var message  = callStatus == APICallStatus.Success ? AlertActionMapper[action][APICallStatus.Success] : message
    return {
        message,type
    }
};