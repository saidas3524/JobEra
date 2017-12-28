import { makeActionCreator } from '../utility';
export const INCREMENT_NO_OF_CALLS = "INCREMENT_NO_OF_CALLS";
export const DECREMENT_NO_OF_CALLS = "DECREMENT_NO_OF_CALLS";
export const incrementPendingAPICalls = makeActionCreator(INCREMENT_NO_OF_CALLS);
export const decrementPendingAPICalls = makeActionCreator(DECREMENT_NO_OF_CALLS);