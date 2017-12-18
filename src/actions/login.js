import { makeActionCreator } from '../utility';
export const LOGIN = "LOGIN";
export const login = makeActionCreator(LOGIN,"user");

export const LOGIN_STATUS = "LOGIN_STATUS";
export const loginStatus = makeActionCreator(LOGIN_STATUS,"status","message");