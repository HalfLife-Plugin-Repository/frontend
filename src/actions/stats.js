/**
 * @file Action to fetch plugin stats
 */

import {CALL_API} from 'redux-api-middleware';
import {API_URL} from 'constants/api';
import * as constants from 'constants/stats';

/**
 * Fetches plugin stats
 */
export default function(){
    return {
        [CALL_API]: {
            endpoint: `${API_URL}/plugins/stats/`,
            method: 'GET',
            types: [
                constants.FETCH_STATS_REQUEST,
                constants.FETCH_STATS_SUCCESS,
                constants.FETCH_STATS_FAILURE
            ]
        }
    }
}