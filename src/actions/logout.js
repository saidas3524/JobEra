import { makeActionCreator } from '../utility';
export const LOGOUT = "LOGOUT";
export const logout = makeActionCreator(LOGOUT);

export const LOGOUT_STATUS = "LOGOUT_STATUS";
export const logoutStatus = makeActionCreator(LOGOUT_STATUS,"status","message");