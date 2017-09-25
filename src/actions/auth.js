/**
 * @file Actions pertaining to authentication
 */

import jwtDecode from 'jwt-decode';
import {normalize} from 'normalizr';
import {CALL_API} from 'redux-api-middleware';
import {API_URL} from 'constants/api';
import * as constants from 'constants/auth';
import {userSchema} from 'schemas';

/**
 * Action to Login a user with the provided credentials.
 */
export function logIn(creds){
    return {
        [CALL_API]: {
            endpoint: `${API_URL}/user/login/`,
            method: 'POST',
            types: [
                constants.LOGIN_REQUEST,
                {
                    type: constants.LOGIN_SUCCESS,
                    payload: (action, state, res) => {
                        return res.json().then((json) => {
                            const {
                                token,
                                user
                            } = json;
                            const {entities} = normalize(user, userSchema);
                            console.log(entities);
                            localStorage.setItem('token', token);
                            return {
                                currentUser: {
                                    ...jwtDecode(token)
                                },
                                entities
                            }
                        });
                    }
                },
                constants.LOGIN_FAILURE
            ],
            body: JSON.stringify({...creds}),
            headers: { 'Content-Type': 'application/json' }
        }
    }
}

/**
 * Logs the user out.
 */
export function logOut(){
    localStorage.removeItem('token');
    return {
        type: constants.LOG_OUT
    }
}

/**
 * Verifies the user's jwt.
 */
export function verifyToken(token){
    return {
        [CALL_API]: {
            endpoint: `${API_URL}/user/verify-token/`,
            method: 'POST',
            types: [
                constants.VERIFY_TOKEN_REQUEST,
                {
                    type: constants.VERIFY_TOKEN_SUCCESS,
                    payload: (action, state, res) => {
                        return res.json().then((json) => {
                            const {
                                token,
                                user
                            } = json;
                            const {entities} = normalize(user, userSchema);
                            return {
                                currentUser: {
                                    ...jwtDecode(token)
                                },
                                entities
                            }
                        });
                    }
                },
                constants.VERIFY_TOKEN_FAILURE
            ],
            body: JSON.stringify({token}),
            headers: {'Content-Type': 'application/json'}
        }
    }
}