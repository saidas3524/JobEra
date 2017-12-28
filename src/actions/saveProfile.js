import { makeActionCreator } from '../utility';
export const SAVE_PROFILE = "SAVE_PROFILE";
export const saveProfile = makeActionCreator(SAVE_PROFILE,"profile");
export const SAVE_PROFILE_STATUS = "SAVE_PROFILE_STATUS";
export const saveProfileStatus = makeActionCreator(SAVE_PROFILE_STATUS,"status","message");