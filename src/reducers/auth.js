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
            return Object.assign({}, state, {
                isAuthenticating: true
            });
        case constants.LOGIN_SUCCESS:
            return Object.assign({}, state, {
                isAuthenticating: false,
                isAuthenticated: true,
                currentUser: action.payload.currentUser
            });
        case constants.LOGIN_FAILURE:
            return Object.assign({}, state, {
                isAuthenticating: false
            });
        default:
            return state;
    }
}