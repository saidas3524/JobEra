import { makeActionCreator  } from '../utility';

export const GET_PROFILE = "GET_PROFILE";
export const getProfileById = makeActionCreator(GET_PROFILE,"id");
export const SET_PROFILE = "SET_PROFILE";
export const setProfileById = makeActionCreator(SET_PROFILE,"profile");