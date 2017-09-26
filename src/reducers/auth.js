/**
 * Reducer to describe state changes when a user
 * logs in, registers or log outs.
 */

import * as constants from 'constants/auth';

export default function(state={
    isAuthenticating: false,
    isAuthenticated: false,
    currentUser: null
}, action){
    switch(action.type){
        case constants.LOGIN_REQUEST:
        case constants.REGISTER_REQUEST:
        case constants.VERIFY_TOKEN_REQUEST:
            return Object.assign({}, state, {
                isAuthenticating: true
            });
        case constants.LOGIN_SUCCESS:
        case constants.REGISTER_SUCCESS:
        case constants.VERIFY_TOKEN_SUCCESS:
            return Object.assign({}, state, {
                isAuthenticating: false,
                isAuthenticated: true,
                currentUser: action.payload.currentUser
            });
        case constants.LOGIN_FAILURE:
        case constants.REGISTER_FAILURE:
        case constants.VERIFY_TOKEN_FAILURE:
            return Object.assign({}, state, {
                isAuthenticating: false
            });
        case constants.LOG_OUT:
            return Object.assign({}, state, {
                isAuthenticated: false,
                currentUser: null
            });
        default:
            return state;
    }
}