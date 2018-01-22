
import { take, put, call, apply, select } from 'redux-saga/effects';
import { fromJS } from 'immutable';
import { GET_USER, setUser, loginStatus } from '../actions';
import { tokenSelector, userSelector } from '../selectors/userSelector';
import { FAILURE } from '../actions/statusConstants';
import { removeToken, getToken } from '../services/TokenManager';
import { InvokeUrl } from "./utilitySagas";
import { alertAddAction } from '../actions/alertActions';
import { API_CONSTANTS } from "../services";




export function* getUserInfoSaga() {
    while (true) {
        yield take(GET_USER);
        var token = yield getToken();
         //valid token check
        if (token) {
            const responseC = yield call(InvokeUrl, `${API_CONSTANTS.Url}/getUserInfo`, "GET");
            if (responseC && responseC.status == 200) {
                const user = yield apply(responseC, responseC.json);
                yield put(setUser(user))
            }
            else {
                yield logOutTheUser();
            }
        }
        else {
            yield logOutTheUser();
        }
       

    }
}



function* logOutTheUser() {
    removeToken();
    yield put(loginStatus(FAILURE));
}