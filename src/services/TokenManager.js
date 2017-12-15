import { isUndefined,isNull } from "lodash";  

var cachedToken;
export const setToken = (token)=>{
    window.localStorage.setItem("token",token);
}



export const getToken = ()=>{
    var token = window.localStorage.getItem("token");
    return token;
}

export const removeToken = ()=>{
    window.localStorage.removeItem("token");
}


export const isAuthenticated = ()=>{
    return !!getToken();
}