import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import browserHistory from 'react-router/lib/browserHistory';
import Flex from 'components/Flex';
import Logged from './Logged';
import NotLogged from './NotLogged';
import {common, blue500} from 'styles';
import logo from 'img/logo-horiz.png';

const style = {
    base: {
        height: 97,
        width: '100%',
        padding: '0 29px',
        zIndex: 1000
    },
    opaque: {
        backgroundColor: blue500,
    },
    transparent: {
        position: 'absolute',
        top: 0,
        left: 0
    },
    logo: {
        height: 71,
        width: 'auto',
        cursor: 'pointer'
    }
};

const Header = (props) => (
    <Flex
        align="center"
        justify="space-between"
        style={[
            common.borderBox,
            style.base,
            (props.opaque) ? style.opaque : style.transparent
    ]}>
        <img
            alt="logo"
            onClick={() => browserHistory.push('/')}
            src={logo}
            style={style.logo}/>
        {(props.isAuthenticated) ? <Logged/> : <NotLogged/>}
    </Flex>
);

Header.defaultProps = {
    opaque: true,
    showSearchBar: true
};

Header.propTypes = {
    opaque: PropTypes.bool,
    showSearchBar: PropTypes.bool,
    isAuthenticated: PropTypes.bool
};

const mapStateToProps = (state) => {
    return {
        isAuthenticated: state.auth.isAuthenticated
    }
};

export default connect(mapStateToProps)(Header);