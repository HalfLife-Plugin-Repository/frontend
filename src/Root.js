import React from 'react';
import {Provider} from 'react-redux';
import browserHistory from 'react-router/lib/browserHistory';
import Router from 'react-router/lib/Router';
import routes from './routes';
import store from './store';

const Root = () => (
    <Provider store={store}>
        <Router history={browserHistory} routes={routes}/>
    </Provider>
);

export default Root;