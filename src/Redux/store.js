import { applyMiddleware, combineReducers, compose, legacy_createStore } from "redux";
import {reducer} from './products/reducer'
import { thunk } from "redux-thunk";
import { authReducer } from "./Auth/reducer";

const rootreducer = combineReducers({EcommerceData : reducer, authReducer});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = legacy_createStore(
    rootreducer, 
    composeEnhancers(applyMiddleware(thunk))
    );
