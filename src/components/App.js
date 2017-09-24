import React from 'react';
import Radium, {Style, StyleRoot} from 'radium';
import Header from './Header';
import root from 'styles';

const App = (props) => (
    <StyleRoot>
        <div>
            <Style rules={root}/>
            {['/login', '/register', '/forgot-password'].indexOf(props.location.pathname) === -1 &&
            <Header opaque={props.location.pathname !== '/'}/>
            }
            {props.children}
        </div>
    </StyleRoot>
);

export default App;