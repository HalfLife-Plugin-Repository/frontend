/**
 * @file Action to fetch plugin stats
 */

import {CALL_API} from 'redux-api-middleware';
import {API_URL} from 'constants/api';
import * as constants from 'constants/stats';

/**
 * Fetches plugin stats
 */
function fetchStats(){
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

/**
 * Fetches plugin stats unless its cached.
 */
export default function(){
    return (dispatch, getState) => {
        const data = getState().stats.data;
        if(data){
            return null;
        }
        return dispatch(fetchStats());
    }
}