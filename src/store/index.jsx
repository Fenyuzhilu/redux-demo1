import Goodlist from './reducer/index';
import {createStore,combineReducers} from "redux";
const reducer=combineReducers({
    Goodlist
})
const store=createStore(reducer)
export default store