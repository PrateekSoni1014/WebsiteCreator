import { combineReducers } from "redux";
import homePage from './homePage'

const appReducer = combineReducers({
    homePage
})
const rootReducer = (state, action) => {
    return appReducer(state, action)
}
export default rootReducer;