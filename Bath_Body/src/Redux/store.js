import { legacy_createStore,combineReducers, applyMiddleware } from "redux";
import thunk from 'redux-thunk';
import { ArfReducer } from "./ArfReducer/reducer";

const reducer=combineReducers({
    arfreducer:ArfReducer
})


export const store=legacy_createStore(reducer,applyMiddleware(thunk));