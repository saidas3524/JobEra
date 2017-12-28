
import { take, put, call, apply } from 'redux-saga/effects';
import { fromJS } from 'immutable';
import fetch from 'isomorphic-fetch';
import { SAVE_PROFILE, SAVE_PROFILE_STATUS, SUCCESS, FAILURE, PENDING, saveProfileStatus} from "../actions";

import { setToken } from "../services";
import { InvokeUrl } from './utilitySagas';


export function* saveProfileSaga() {

    while (true) {

        const {profile} = yield take(SAVE_PROFILE);
        yield put(saveProfileStatus(PENDING));

        const { response, error } = yield call(InvokeUrl, "http://localhost:3300/saveProfile", "POST",profile);
        if (response && response.status >= 200 && response.status < 300) {


            const profileData = yield apply(response, response.json);
            yield put(saveProfileStatus(SUCCESS));

            console.log(profileData);
        }
        else {
            if (response) {
                const message = yield response.json();
                yield put(saveProfileStatus(FAILURE, message));
            }
            else {


                yield put(saveProfileStatus(FAILURE, error));
            }
        }
    }
}