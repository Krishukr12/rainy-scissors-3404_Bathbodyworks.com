
import { applyMiddleware, combineReducers, compose, legacy_createStore } from "redux";
import { reducer as AuthReducer} from "./Authreducer/reducer";
import thunk from "redux-thunk"
import { ArfReducer } from "./ArfReducer/reducer";


const rootreducer=combineReducers({
    AuthReducer:AuthReducer,
    ArfReducer:ArfReducer})
// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// export const store=legacy_createStore(rootreducer,applyMiddleware(composeEnhancers(thunk)))
export const store =legacy_createStore(rootreducer,applyMiddleware(thunk));
