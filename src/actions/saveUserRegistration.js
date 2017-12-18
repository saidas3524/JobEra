import { makeActionCreator } from '../utility';
export const SAVE_USER_REGISTRATION = "SAVE_USER_REGISTRATION";
export const saveUserRegistration = makeActionCreator(SAVE_USER_REGISTRATION,"user");

export const REGISTRATION_STATUS = "REGISTRATION_STATUS";
export const registrationStatus = makeActionCreator(REGISTRATION_STATUS,"status","message");