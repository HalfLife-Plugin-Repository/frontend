/**
 * @file Actions pertaining to plugins
 */

import {normalize} from 'normalizr';
import {CALL_API} from 'redux-api-middleware';
import {API_URL} from 'constants/api';
import * as constants from 'constants/plugins';
import {pluginsSchema} from 'schemas';

/**
 * Fetches the ten most recently updated plugins
 */
export function getRecentlyUpdated(){
    return {
        [CALL_API]: {
            endpoint: `${API_URL}/plugins/last_updated/`,
            method: 'GET',
            types: [
                constants.FETCH_RECENTLY_UPDATED_REQUEST,
                {
                    type: constants.FETCH_RECENTLY_UPDATED_SUCCESS,
                    payload: (action, state, res) => {
                        return res.json().then((json) => normalize(json, pluginsSchema));
                    }
                },
                constants.FETCH_RECENTLY_UPDATED_FAILURE
            ]
        }
    }
}