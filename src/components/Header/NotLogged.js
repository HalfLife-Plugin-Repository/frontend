import React from 'react';
import browserHistory from 'react-router/lib/browserHistory';
import Link from 'react-router/lib/Link';
import Button from 'components/Button';
import phrases from 'lang';
import {common} from 'styles';

const style = {
    login: {
        fontSize: 14.5,
        marginRight: 25
    }
};

const NotLogged = (props) => (
    <div>
        <Link
            to="/login"
            style={Object.assign({},
                common.white,
                common.strong,
                style.login
            )}>
            {phrases.login}
        </Link>
        <Button
            onClick={() => browserHistory.push('/register')}
            label={phrases.register}
            filled={false}/>
    </div>
);

export default NotLogged;