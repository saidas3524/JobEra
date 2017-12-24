import { makeActionCreator } from '../utility';
export const GET_PROFILES = "GET_PROFILES";
export const getProfiles = makeActionCreator(GET_PROFILES);

export const SET_PROFILES = "SET_PROFILES";
export const setProfiles = makeActionCreator(SET_PROFILES,"profiles");