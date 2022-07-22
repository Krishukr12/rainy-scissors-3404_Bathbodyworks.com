

import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import { reducer as AuthReducer} from "./Authreducer/reducer";
import thunk from "redux-thunk"
import { ArfReducer } from "./ArfReducer/reducer";
import { kreducer } from "./krReducer/reducer";

const rootreducer = combineReducers({
  AuthReducer: AuthReducer,
  ArfReducer: ArfReducer,
  Freducer: kreducer,
});

export const store=legacy_createStore(rootreducer,applyMiddleware(thunk))

