
import { take, put, call, apply } from 'redux-saga/effects';
import { fromJS } from 'immutable';
import fetch from 'isomorphic-fetch';
import { SAVE_USER_REGISTRATION, registrationStatus, SUCCESS, FAILURE, PENDING } from "../actions";

import { setToken } from "../services";
import { fetchUtility } from '../utility/fetchUtility';
import { API_CONSTANTS } from "../services";



export function* saveUserRegistration() {

    while (true) {

        const { user } = yield take(SAVE_USER_REGISTRATION);
        yield put(registrationStatus(PENDING));

        const { response, error } = yield call(fetchUtility, `${API_CONSTANTS.Url}/register`, {
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
            yield put(registrationStatus(SUCCESS));

            console.log(UserData);
        }
        else {
            if (response) {
                const message = yield response.json();
                yield put(registrationStatus(FAILURE, message));
            }
            else {


                yield put(registrationStatus(FAILURE, error));
            }
        }
    }
}