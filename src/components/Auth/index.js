import React from 'react';
import browserHistory from 'react-router/lib/browserHistory';
import Flex from 'components/Flex';
import {animations, common} from 'styles';
import logo from 'img/logo-vert.png';

const style = {
    container: {
        height: '100vh',
        width: '100%'
    },
    logo: {
        height: 139,
        margin: '32px 0',
        cursor: 'pointer'
    }
};

const Auth = (props) => (
    <Flex
        column={true}
        align="center"
        justify="flex-start"
        style={[
            common.vGradient,
            style.container
    ]}>
        <img
            src={logo}
            alt="Logo"
            style={style.logo}
            onClick={() => browserHistory.push('/')}/>
        {props.children}
    </Flex>
);

export ForgotPassword from './ForgotPassword';
export Login from './Login';
export Register from './Register';
export default Auth;