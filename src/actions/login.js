import { makeActionCreator } from '../utility';
export const LOGIN = "LOGIN";
export const login = makeActionCreator(LOGIN,"user");