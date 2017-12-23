import { makeActionCreator } from '../utility';
export const SET_USER = "SET_USER";
export const setUser = makeActionCreator(SET_USER,"userInfo");

export const GET_USER = "GET_USER";
export const getUser = makeActionCreator(GET_USER);


export const SET_TOKEN = "SET_TOKEN";
export const setToken = makeActionCreator(SET_TOKEN,"token");


export const GET_TOKEN = "GET_TOKEN";
export const getToken = makeActionCreator(GET_TOKEN);