
import { take, put, call, apply } from 'redux-saga/effects';
import { fromJS } from 'immutable';
import { InvokeUrl } from "./utilitySagas";
import { GET_GREETINGS, setGreetings } from '../actions/greetings';



export function* greetingsSaga() {
    
    yield take(GET_GREETINGS);
    const responseC = yield call(InvokeUrl, "http://localhost:3300/greetings", "GET");
    if(responseC.status == 200){
        const greetingsData = yield apply(responseC, responseC.json);

        console.log("greetings are successfully called");
        yield put(setGreetings(greetingsData))

    }
    else{
        console.log("failure greetings");
    }
}