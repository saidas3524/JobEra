
import { take, put, call, apply } from 'redux-saga/effects';
import { fromJS } from 'immutable';
import fetch from 'isomorphic-fetch';
import { LOGIN, setUser, loginStatus, SUCCESS, FAILURE, PENDING,setToken } from "../actions";

import { setToken as setTokenInStorage } from "../services";

import { fetchUtility } from '../utility/fetchUtility';


export function* loginSaga() {

    while (true) {


        const { user } = yield take(LOGIN);
        yield put(loginStatus(PENDING));
        const { response, error } = yield call(fetchUtility, "http://localhost:3300/login", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
            body: JSON.stringify(user)
        });

        if (response && response.status >= 200 && response.status < 300) {

            const UserData = yield apply(response, response.json);
            setTokenInStorage(UserData.token);
            //sequence matters.... first set the user data which is called by app on load.. otherwise it will logout
            yield put(setUser(UserData.user));
            yield put(setToken(UserData.token));
            yield put(loginStatus(SUCCESS));
         
            put(setUser(UserData))
            console.log(UserData);
        }
        else {

            if (response) {
                const message = yield response.json();
                yield put(loginStatus(FAILURE, message));
            }
            else {
                yield put(loginStatus(FAILURE, error));
            }
        }

    }
}