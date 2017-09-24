/**
 * @file Stores user data, whether fetched at /user/:id/ endpoint
 * or currently logged in user.
 */

import {LOGIN_SUCCESS} from 'constants/auth';

export default function(state = {}, action){
    switch(action.type){
        case LOGIN_SUCCESS:
            const {
                user
            } = action.payload;
            return {
                ...state,
                [user.id]: user
            };
        default:
            return state;
    }
}