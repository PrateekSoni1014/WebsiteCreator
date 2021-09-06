import { put, takeEvery } from 'redux-saga/effects';
import {getWebSiteDataStart, getWebSiteDataSuccess, getWebSiteDataError} from '../reducer/homePage';
import {getDocData} from '../../services/firebase';

export default function* homePageSagaWatcher() {
    yield takeEvery(getWebSiteDataStart.type , getWebSiteDataWorker);
}

function* getWebSiteDataWorker(action) {
    console.log("function called")
    const result =  yield getDocData(action.payload);
    console.log("🚀 ~ function*getWebSiteDataWorker ~ result", result)
    if(result)
    yield put(getWebSiteDataSuccess(result))
    else
    yield put(getWebSiteDataError('No Data found'))
}

