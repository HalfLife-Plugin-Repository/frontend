/**
 * @file Actions to fetch a list of users or a specific
 * user by filtering against its ids.
 */

import {normalize} from 'normalizr';
import {CALL_API} from 'redux-api-middleware';
import {API_URL} from 'constants/api';
import * as constants from 'constants/users';
import {userSchema} from 'schemas';

/**
 * Fetches a user by its id
 */
export function fetchUser(id){
    return {
        [CALL_API]: {
            endpoint: `${API_URL}/user/accounts/${id}/`,
            method: 'GET',
            types: [
                constants.FETCH_USER_REQUEST,
                {
                    type: constants.FETCH_USER_SUCCESS,
                    payload: (action, state, res) => {
                        return res.json().then((json) => normalize(json, userSchema));
                    }
                },
                constants.FETCH_USER_FAILURE
            ]
        }
    }
}