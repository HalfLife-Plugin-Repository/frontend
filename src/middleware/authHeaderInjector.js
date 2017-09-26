import {CALL_API} from 'redux-api-middleware';

const authHeaderInjector = (store) => (next) => (action) => {
    const callApi = action[CALL_API];
    if(callApi){
        callApi.headers = Object.assign({}, callApi.headers, {
            Authorization: `JWT ${localStorage.getItem('token')}` || ''
        });
    }
    return next(action);
};

export default authHeaderInjector;