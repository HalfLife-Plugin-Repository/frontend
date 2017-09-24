import React from 'react';
import ReactDOM from 'react-dom';
import Root from './Root';

const render = (RootComponent) => {
    ReactDOM.render(
        <RootComponent/>,
        document.getElementById('app')
    );
};

render(Root);

if(module.hot){
    module.hot.accept('./Root', () => {
        const NextRoot = require('./Root').default;
        render(NextRoot);
    });
}