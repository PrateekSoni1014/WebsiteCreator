import { all } from 'redux-saga/effects'
import settingSaga from './settingSaga'

export default function* rootSaga(){
    yield all([
        settingSaga()
    ])
}