/**
 * Describes the state changes when plugins are
 * fetched.
 */

import * as constants from 'constants/plugins';

export default function (state = {
        id: null,
        ids: null,
        isFetching: false
    }, action){
    switch(action.type){
        case constants.FETCH_PLUGIN_REQUEST:
        case constants.FETCH_PLUGINS_REQUEST:
            return Object.assign({}, state, {
                isFetching: true
            });
        case constants.FETCH_PLUGIN_SUCCESS:
            return Object.assign({}, state, {
                id: action.payload.result,
                isFetching: false
            });
        case constants.FETCH_PLUGINS_SUCCESS:
            return Object.assign({}, state, {
                ids: action.payload.result,
                isFetching: false
            });
        case constants.FETCH_PLUGIN_FAILURE:
        case constants.FETCH_PLUGINS_FAILURE:
            return Object.assign({}, state, {
                isFetching: false
            });
        default:
            return state;
    }
}