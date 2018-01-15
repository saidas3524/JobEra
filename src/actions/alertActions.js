import { makeActionCreator } from '../utility';
export const ADD_ALERT = "ADD_ALERT";
export const REMOVE_ALERT = "REMOVE_ALERT";
export const REMOVE_ALL_ALERTS = "REMOVE_ALL";

export const alertAddAction = makeActionCreator(ADD_ALERT,"alert");
export const alertRemoveAction = makeActionCreator(REMOVE_ALERT,"alert");
export const alertRemoveAllAction = makeActionCreator(REMOVE_ALL_ALERTS);