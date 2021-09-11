import { combineReducers } from "redux";
import setting from './setting'

const appReducer = combineReducers({
    setting
})
const rootReducer = (state, action) => {
    return appReducer(state, action)
}
export default rootReducer;