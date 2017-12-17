
import { take, put, call, apply } from 'redux-saga/effects';
import { fromJS } from 'immutable';
import fetch from 'isomorphic-fetch';
import { LOGIN, setUser } from "../actions";

import { setToken } from "../services";


export function* loginSaga() {

    while (true) {


        const { user } = yield take(LOGIN);
        const responseC = yield call(fetch, "http://localhost:3300/login", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
            body: JSON.stringify(user)
        });

        const UserData = yield apply(responseC, responseC.json);
        setToken(UserData.token);
        put(setUser(UserData))
        console.log(UserData);


    }
}