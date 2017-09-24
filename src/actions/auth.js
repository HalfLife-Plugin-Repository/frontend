/**
 * @file Actions pertaining to authentication
 */

import jwtDecode from 'jwt-decode';
import {CALL_API} from 'redux-api-middleware';
import {API_URL} from 'constants/api';
import * as constants from 'constants/auth';

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
                            localStorage.setItem('token', token);
                            return {
                                currentUser: {
                                    ...jwtDecode(token)
                                },
                                user
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
