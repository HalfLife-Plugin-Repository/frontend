import browserHistory from 'react-router/lib/browserHistory';
import createHandlerMiddleware from 'redux-handler-middleware';
import {LOGIN_SUCCESS, LOG_OUT} from 'constants/auth';

const handlerMiddleware = createHandlerMiddleware([
    {
        actions: [LOGIN_SUCCESS, LOG_OUT],
        afterHandler: () => {
            browserHistory.push('/');
        }
    }
]);

export default handlerMiddleware;