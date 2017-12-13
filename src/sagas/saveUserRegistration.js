
import { take, put, call, apply } from 'redux-saga/effects';
import { fromJS } from 'immutable';
import fetch from 'isomorphic-fetch';
import { SAVE_USER_REGISTRATION } from "../actions";


export function* saveUserRegistration() {
    
    const user = yield take(SAVE_USER_REGISTRATION);
    const responseC = yield call(fetch, "http://localhost:3300/register", {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        },
        body :user
    });

    const UserData = yield apply(responseC, responseC.json);
    console.log(UserData);

 
}