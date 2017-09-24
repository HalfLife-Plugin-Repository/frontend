import browserHistory from 'react-router/lib/browserHistory';
import createHandlerMiddleware from 'redux-handler-middleware';
import {LOGIN_SUCCESS} from 'constants/auth';

const handlerMiddleware = createHandlerMiddleware([
    {
        action: LOGIN_SUCCESS,
        afterHandler: () => {
            browserHistory.push('/');
        }
    }
]);

export default handlerMiddleware;