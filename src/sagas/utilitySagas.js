import { take, select, call, put, apply } from "redux-saga/effects";
import { fetchUtility } from "../utility"
import cache from 'memory-cache';
import { getToken } from "../services";
import {incrementPendingAPICalls,decrementPendingAPICalls} from "../actions";

export function* InvokeUrl(url, method, data) {


    var token = getToken();
    
    yield put(incrementPendingAPICalls());
    const { response, error } = yield call(fetchUtility, url, {
        method: method,
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(data)

    });
    yield put(decrementPendingAPICalls());



    return response ? response : error;
}

