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
 * Utility to normalize user data and decode jwt.
 * @private
 */
const getPayload = (action, state, res) => {
    return res.json().then((json) => {
        const {
            token,
            user
        } = json;
        const {entities} = normalize(user, userSchema);
        localStorage.setItem('token', token);
        return {
            currentUser: {
                ...jwtDecode(token)
            },
            entities
        }
    });
};

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
                    payload: getPayload
                },
                constants.LOGIN_FAILURE
            ],
            body: JSON.stringify(creds),
            headers: { 'Content-Type': 'application/json' }
        }
    }
}

/**
 * Registers a user
 */
export function register(creds){
    return {
        [CALL_API]: {
            endpoint: `${API_URL}/user/register/`,
            method: 'POST',
            types: [
                constants.REGISTER_REQUEST,
                {
                    type: constants.REGISTER_SUCCESS,
                    payload: getPayload
                },
                constants.REGISTER_FAILURE
            ],
            body: JSON.stringify(creds),
            headers: { 'Content-Type': 'application/json' }
        }
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
                    payload: getPayload
                },
                constants.VERIFY_TOKEN_FAILURE
            ],
            body: JSON.stringify({token}),
            headers: {'Content-Type': 'application/json'}
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
 * Updates a user's profile.
 */
export function updateProfile(profile){
    return {
        [CALL_API]: {
            endpoint: `${API_URL}/user/accounts/update/`,
            method: 'PATCH',
            types: [
                constants.UPDATE_PROFILE_REQUEST,
                {
                    type: constants.UPDATE_PROFILE_SUCCESS,
                    payload: (action, state, res) => {
                        return res.json().then((json) => normalize(json, userSchema))
                    }
                },
                constants.UPDATE_PROFILE_FAILURE
            ],
            body: JSON.stringify(profile),
            headers: {'Content-Type': 'application/json'}
        }
    }
}