import merge from 'lodash.merge';

export default function(state = {
    plugins: {},
    users: {}
}, action){
    if(action.payload && action.payload.entities){
        return merge({}, state, action.payload.entities);
    }
    return state;
}