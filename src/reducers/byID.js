/**
 * Utility to create a reducer to keep track of fetching state, an
 * array of ids and its count.
 */

export default function(types){
    if(!Array.isArray(types) || types.length !== 3){
        throw new Error('Expected types to be an array of length 3.');
    }

    const [requestType, successType, failureType] = types;
    return (state = {
        count: 0,
        ids: null,
        isFetching: false
    }, action) => {
        switch(action.type){
            case requestType:
                return Object.assign({}, state, {
                    isFetching: true
                });
            case successType:
                return Object.assign({}, state, {
                    count: action.payload.result.length,
                    ids: action.payload.result,
                    isFetching: false
                });
            case failureType:
                return Object.assign({}, state, {
                     isFetching: false
                });
            default:
                return state;
        }
    }
}