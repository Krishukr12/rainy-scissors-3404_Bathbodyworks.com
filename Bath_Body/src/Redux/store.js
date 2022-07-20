import { legacy_createStore, applyMiddleware, combineReducers } from "redux";
import thunk from 'redux-thunk';
import { ArfReducer } from "./ArfReducer/reducer";

const reducer = combineReducers({
    arfreducer:ArfReducer
});

export const store = legacy_createStore(reducer,applyMiddleware(thunk));