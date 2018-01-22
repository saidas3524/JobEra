
import { take, put, call, apply } from 'redux-saga/effects';
import { fromJS } from 'immutable';
import { InvokeUrl } from "./utilitySagas";
import { GET_GREETINGS, setGreetings } from '../actions/greetings';
import { API_CONSTANTS } from "../services";




export function* greetingsSaga() {
    
    yield take(GET_GREETINGS);
    const responseC = yield call(InvokeUrl, `${API_CONSTANTS.Url}/greetings`, "GET");
    if(responseC.status == 200){
        const greetingsData = yield apply(responseC, responseC.json);

        console.log("greetings are successfully called");
        yield put(setGreetings(greetingsData))

    }
    else{
        console.log("failure greetings");
    }
}