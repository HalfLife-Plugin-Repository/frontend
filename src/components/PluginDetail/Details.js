import React from 'react';
import Avatar from 'components/Avatar';
import {common} from 'styles';

const style = {
    avatar: {
        marginBottom: 10
    },
    content: {
        paddingTop: 20,
        textAlign: 'center'
    }
};

const Details = (props) => (
    <div style={style.content}>
        <Avatar
            size={60}
            src={`${props.author.avatar}?d=retro&s=60`}
            style={style.avatar}/>
        <h4 style={common.grey700}>
            by {props.author.username}
        </h4>
        <p style={common.grey600}>
            {props.plugin.summary}
        </p>
    </div>
);

export default Details;