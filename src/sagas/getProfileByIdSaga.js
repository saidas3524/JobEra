
import { take, put, call, apply, select } from 'redux-saga/effects';
import { fromJS } from 'immutable';
import { FAILURE } from '../actions/statusConstants';
import { InvokeUrl } from "./utilitySagas";
import { setProfileById, GET_PROFILE, SET_PROFILE } from '../actions';
import { API_CONSTANTS } from "../services";



export function* getProfileByIdSaga() {
    while (true) {
        const {id} = yield take(GET_PROFILE);
        const responseC = yield call(InvokeUrl, `${API_CONSTANTS.Url}/getProfileById/${id}`, "GET");
        if (responseC.status == 200) {
            const profile = yield apply(responseC, responseC.json);

            yield put(setProfileById(profile));

        }
        else {
            console.log("failure get Profile by id");
        }


    }
}



