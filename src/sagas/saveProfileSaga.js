
import { take, put, call, apply } from 'redux-saga/effects';
import { fromJS } from 'immutable';
import fetch from 'isomorphic-fetch';
import { SAVE_PROFILE, SAVE_PROFILE_STATUS, SUCCESS, FAILURE, PENDING, saveProfileStatus} from "../actions";

import { setToken,APICallStatus } from "../services";
import { InvokeUrl } from './utilitySagas';
import { alertAddAction } from '../actions/alertActions';
import { createAlert } from '../utility/createAlert';
import { API_CONSTANTS } from "../services";



export function* saveProfileSaga() {

    while (true) {

        const {profile} = yield take(SAVE_PROFILE);
        yield put(saveProfileStatus(PENDING));

        const response = yield call(InvokeUrl, `${API_CONSTANTS.Url}/saveProfile`, "POST",profile);
        if (response && response.status >= 200 && response.status < 300) {


            const profileData = yield apply(response, response.json);
            console.log({profileData});
            yield put(saveProfileStatus(SUCCESS));
            yield put(alertAddAction(createAlert(SAVE_PROFILE,APICallStatus.Success)));

        }
        else {
            if (response) {
                const message = yield response.json();
                yield put(saveProfileStatus(FAILURE, message.message));
                yield put(alertAddAction(createAlert(SAVE_PROFILE,APICallStatus.Failure,message.message)));
            }
            else {


                yield put(saveProfileStatus(FAILURE, error));
                yield put(alertAddAction(createAlert(SAVE_PROFILE,APICallStatus.Failure,error)));

            }
        }
    }
}