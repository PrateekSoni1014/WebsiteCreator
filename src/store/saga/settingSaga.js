import { put, takeEvery } from 'redux-saga/effects';
import {getWebSiteDataStart, getWebSiteDataSuccess, getWebSiteDataError,
    updateSettingStart, updateSettingSuccess, updateSettingError,
    createSettingStart, createSettingSuccess, createSettingError} from '../reducer/setting';
import {getDocData, updateDocData, createDocData} from '../../services/firebase';

export default function* settingSagaWatcher() {
    yield takeEvery(getWebSiteDataStart.type , getWebSiteDataWorker);
    yield takeEvery(updateSettingStart.type , updateSettingWorker);
    yield takeEvery(createSettingStart.type , createSettingWorker);
}

function* getWebSiteDataWorker(action) {
    const result =  yield getDocData(action.payload);
    if(result)
    yield put(getWebSiteDataSuccess(result))
    else
    yield put(getWebSiteDataError('Something went wrong'))
}

function* updateSettingWorker(action) {
    const result =  yield updateDocData(action.payload);
    console.log("🚀 ~ function*updateSettingWorker ~ result", result)
    if(result){
        yield put(updateSettingSuccess(result))
        yield put(getWebSiteDataSuccess(result))
        alert("Setting Updated");
    }
    else
    yield put(updateSettingError('Something went wrong'))
}

function* createSettingWorker(action) {
    const result =  yield createDocData(action.payload);
    if(result)
    yield put(createSettingSuccess(result))
    else
    yield put(createSettingError('Something went wrong'))
}

