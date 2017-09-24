import React, {PropTypes} from 'react';
import MdArrowDropDown from 'react-icons/lib/md/arrow-drop-down';
import Avatar from 'components/Avatar';
import {common} from 'styles';

const style = {
    salutations: {
        marginRight: 15
    }
};

const Logged = (props) => {
    const {
        avatar,
        id,
        username,
    } = props.user;
    return (
        <div style={common.white}>
            <span style={style.salutations}>Greetings, {username}</span>
            <Avatar
                alt={username}
                src="https://www.gravatar.com/avatar/94d093eda664addd6e450d7e9881bcad?s=50&d=identicon&r=PG"/>
            <MdArrowDropDown size={24}/>
        </div>
    );
};

export default Logged;