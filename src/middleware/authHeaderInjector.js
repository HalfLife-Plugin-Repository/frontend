import {CALL_API} from 'redux-api-middleware';

const authHeaderInjector = (store) => (next) => (action) => {
    const callApi = action[CALL_API];
    // only include for unsafe methods see:
    // https://github.com/GetBlimp/django-rest-framework-jwt/issues/254
    if(callApi && callApi.method !== 'GET'){
        const token = localStorage.getItem('token');
        if(token){
            callApi.headers = Object.assign({}, callApi.headers, {
                Authorization: `JWT ${token}`
            });
        }
    }
    return next(action);
};

export default authHeaderInjector;