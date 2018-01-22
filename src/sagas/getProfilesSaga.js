
import { take, put, call, apply, select } from 'redux-saga/effects';
import { fromJS } from 'immutable';
import { FAILURE } from '../actions/statusConstants';
import { InvokeUrl } from "./utilitySagas";
import { getProfiles, GET_PROFILES, setProfiles } from '../actions';
import { API_CONSTANTS } from "../services";




export function* getProfilesSaga() {
    while (true) {
        yield take(GET_PROFILES);
        const responseC = yield call(InvokeUrl, `${API_CONSTANTS.Url}/getProfiles`, "GET");
        if (responseC.status == 200) {
            const profiles = yield apply(responseC, responseC.json);

            yield put(setProfiles(profiles));

        }
        else {
            console.log("failure searchProfiles");
        }


    }
}



