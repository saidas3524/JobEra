import { makeActionCreator } from "../utility";

export const GET_GREETINGS = "GET_GREETINGS";
export const SET_GREETINGS = "SET_GREETINGS";

export const setGreetings = makeActionCreator(SET_GREETINGS,"greetings");

export const getGreetings = makeActionCreator(GET_GREETINGS);