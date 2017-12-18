
import { take, put, call, apply } from 'redux-saga/effects';
import { fromJS } from 'immutable';
import fetch from 'isomorphic-fetch';
import { LOGIN, setUser, loginStatus, SUCCESS, FAILURE, PENDING } from "../actions";

import { setToken } from "../services";
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

        if (response.status >= 200 && response.status < 300) {

            const UserData = yield apply(response, response.json);
            setToken(UserData.token);
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