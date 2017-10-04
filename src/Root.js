import React from 'react';
import {Provider} from 'react-redux';
import browserHistory from 'react-router/lib/browserHistory';
import Router from 'react-router/lib/Router';
import routes from './routes';
import store from './store';

const Root = () => (
    <Provider store={store}>
        <Router onUpdate={() => window.scrollTo(0, 0)} history={browserHistory} routes={routes}/>
    </Provider>
);

export default Root;