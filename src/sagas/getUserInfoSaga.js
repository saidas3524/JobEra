
import { take, put, call, apply, select } from 'redux-saga/effects';
import { fromJS } from 'immutable';
import { GET_USER, setUser, loginStatus } from '../actions';
import { tokenSelector, userSelector } from '../selectors/userSelector';
import { FAILURE } from '../actions/statusConstants';
import { removeToken } from '../services/TokenManager';



export function* getUserInfoSaga() {
    while (true) {
        yield take(GET_USER);

        var token = yield select(tokenSelector);
        //valid token check
        if (token) {
            var user = yield select(userSelector);
            console.log("usersaga");
            console.log(user);
            if (user)
                yield put(setUser(user));
            else
                yield logOutTheUser();
        }
        else
            yield logOutTheUser();
    }

}


function* logOutTheUser() {
    removeToken();
    yield put(loginStatus(FAILURE));
}