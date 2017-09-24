import {
    createStore,
    applyMiddleware
} from "redux";
import thunk from 'redux-thunk';
import { apiMiddleware } from 'redux-api-middleware';
import {authHeaderInjector, handlerMiddleware} from 'middleware';
import rootReducer from '../reducers';

export default createStore(
    rootReducer,
    {},
    applyMiddleware(thunk, authHeaderInjector, apiMiddleware, handlerMiddleware)
);
