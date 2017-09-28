import printf from 'printf';
import React, {Component} from 'react';
import Radium from 'radium';
import {connect} from 'react-redux';
import {logOut} from 'actions/auth';
import Link from 'react-router/lib/Link';
import MdArrowDropDown from 'react-icons/lib/md/arrow-drop-down';
import MdArrowDropUp from 'react-icons/lib/md/arrow-drop-up';
import Avatar from 'components/Avatar';
import Menu, {MenuItem} from 'components/Menu';
import phrases from 'lang';
import {common, blue600, blue700} from 'styles';

const style = {
    container: {
        position: 'relative',
        padding: '6px 1em',
        cursor: 'pointer',
        transition: '0.6s ease all',
        ':hover': {
            backgroundColor: blue600,
        }
    },
    opened: {
        backgroundColor: blue600,
    },
    menu: {
        backgroundColor: blue600,
        top: '3em'
    },
    menuItemHoverStyle: {
        backgroundColor: blue700
    },
    salutations: {
        marginRight: 15,
        verticalAlign: 'middle'
    }
};

const truncateUserName = (username) => {
    return (username.length < 15) ? username : `${username.substr(0, 15)}...`
};

class Logged extends Component{
    state = {
        menuOpen: false
    };

    handleClick = () => {
        this.setState({
            menuOpen: !this.state.menuOpen
        });
    };

    render(){
        const {
            logOut,
            user: {
                avatar,
                id,
                username,
            }
        } = this.props;
        const {
            menuOpen
        } = this.state;
        return (
            <div
                onClick={this.handleClick}
                style={[
                    common.white,
                    style.container,
                    (menuOpen && style.opened)
                ]}>
                <span style={style.salutations}>{printf(phrases.greetings, username)}</span>
                <Avatar
                    alt={username}
                    size={36}
                    src="https://www.gravatar.com/avatar/94d093eda664addd6e450d7e9881bcad?s=36&d=identicon&r=PG"/>
                {menuOpen && <MdArrowDropUp size={24}/>}
                {!menuOpen && <MdArrowDropDown size={24}/>}
                <Menu
                    style={style.menu}
                    open={menuOpen}>
                    <MenuItem
                        hoverStyle={style.menuItemHoverStyle}>
                        <Link to={`/user/${id}`}>
                            {phrases.profile}
                        </Link>
                    </MenuItem>
                    <MenuItem
                        hoverStyle={style.menuItemHoverStyle}>
                        <Link to={`/settings`}>
                            {phrases.settings}
                        </Link>
                    </MenuItem>
                    <MenuItem
                        hoverStyle={style.menuItemHoverStyle}
                        onClick={logOut}>
                        <span>
                            {phrases.log_out}
                        </span>
                    </MenuItem>
                </Menu>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    const user = state.entities.users[state.auth.currentUser.user_id];
    return {
        user
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        logOut: () => dispatch(logOut())
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Radium(Logged));