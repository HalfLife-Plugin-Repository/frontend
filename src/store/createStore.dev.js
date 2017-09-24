import {
    compose,
    createStore,
    applyMiddleware
} from "redux";
import thunk from 'redux-thunk';
import {apiMiddleware} from 'redux-api-middleware';
import {createLogger} from 'redux-logger';
import {authHeaderInjector, handlerMiddleware} from 'middleware';
import rootReducer from '../reducers';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default createStore(
    rootReducer,
    {},
    composeEnhancers(
        applyMiddleware(thunk, authHeaderInjector, apiMiddleware, handlerMiddleware, createLogger())
    )
);