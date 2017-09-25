/**
 * Describes the state changes when the recently updated
 * plugins are fetched.
 */

import * as constants from 'constants/plugins';

export default function(state = {
    ids: null,
    isFetching: false
}, action){
    switch(action.type){
        case constants.FETCH_RECENTLY_UPDATED_REQUEST:
            return Object.assign({}, state, {
                isFetching: true
            });
        case constants.FETCH_RECENTLY_UPDATED_SUCCESS:
            return Object.assign({}, state, {
                ids: action.payload.result,
                isFetching: false
            });
        case constants.FETCH_RECENTLY_UPDATED_FAILURE:
            return Object.assign({}, state, {
                isFetching: false
            });
        default:
            return state;
    }
}