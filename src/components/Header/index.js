import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import Flex from 'components/Flex';
import Logged from './Logged';
import NotLogged from './NotLogged';
import {common, blue500} from 'styles';
import logo from 'img/logo-horiz.png';

const style = {
    base: {
        height: 97,
        width: '100%',
        padding: '0 29px'
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
        width: 'auto'
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
        <img src={logo} alt="logo" style={style.logo}/>
        {(props.isAuthenticated) ? <Logged user={props.user}/> : <NotLogged/>}
    </Flex>
);

Header.defaultProps = {
    opaque: true,
    showSearchBar: true
};

Header.propTypes = {
    opaque: PropTypes.bool,
    showSearchBar: PropTypes.bool,
    isAuthenticated: PropTypes.bool.isRequired,
    user: PropTypes.object
};

const mapStateToProps = (state) => {
    const {
        auth: {
            isAuthenticated,
            currentUser
        },
        users
    } = state;

    let user = null;
    if(isAuthenticated){
        const {user_id} = currentUser;
        user = users[user_id];
    }

    return {
        isAuthenticated,
        user
    }
};

export default connect(mapStateToProps)(Header);