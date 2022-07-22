
import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import { reducer as AuthReducer} from "./Authreducer/reducer";
import thunk from "redux-thunk"
import { ArfReducer } from "./ArfReducer/reducer";


const rootreducer=combineReducers({
    AuthReducer:AuthReducer,
    ArfReducer:ArfReducer})


export const store=legacy_createStore(rootreducer,applyMiddleware(thunk))




