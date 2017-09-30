import React from 'react';
import PropTypes from 'prop-types';
import Radium from 'radium';
import moment from 'moment';
import {connect} from 'react-redux';
import Divider from 'components/Divider';
import StyledLink from 'components/StyledLink';
import {AMXModX, MetaMod, SourceMod} from 'components/Tags';
import phrases from 'lang';
import {common, blue500, blue700, grey300, grey700, grey900} from 'styles';

const style = {
    container: {
        position: 'relative',
        marginBottom: '0.5em'
    },
    content: {
        paddingLeft: 60
    },
    divider: {
        backgroundColor: grey300,
        marginTop: '0.5em'
    },
    last_updated: {
        fontSize: 14.5
    },
    header: {
        fontFamily: 'inherit',
        color: grey700,
        ':hover': {
            color: grey900
        }
    },
    link: {
        color: blue500,
        ':hover': {
            color: blue700
        }
    },
    tag: {
        position: 'absolute',
        top: 0,
        left: 0
    }
};

const formatDate = (date) => {
    return moment(date).fromNow();
};

const Plugin = (props) => (
    <div style={style.container}>
        <div style={style.tag}>
            {{
                'amx_mod_x': <AMXModX/>,
                'metamod': <MetaMod/>,
                'sourcemod': <SourceMod/>
            }[props.plugin.mod]}
        </div>
        <div style={style.content}>
            <h5 style={common.inlineBlock}>
                <StyledLink
                    style={style.header}
                    to={`/plugin/${props.plugin.slug}`}>
                    {props.plugin.name}&nbsp;
                </StyledLink>
            </h5>
            <span style={common.grey500}>
                by&nbsp;
                <StyledLink
                    to={`/user/${props.user.id}`}
                    style={style.link}>
                    {props.user.username}
                </StyledLink>
            </span>
            <p style={common.grey500}>{props.plugin.summary}</p>
            <span style={[
                common.grey500,
                style.last_updated
            ]}>
                {phrases.last_updated}&nbsp;{formatDate(props.plugin.last_updated)}
            </span>
        </div>
        {props.showDivider &&
        <Divider style={style.divider}/>
        }
    </div>
);

Plugin.defaultProps = {
    showDivider: true
};

Plugin.propTypes = {
    plugin: PropTypes.object.isRequired,
    showDivider: PropTypes.bool,
    user: PropTypes.object.isRequired
};

const mapStateToProps = (state, props) => {
    const author = props.plugin.author;
    const users = state.entities.users;
    const user = users[author];

    return {
        user
    }
};

export default connect(mapStateToProps)(Radium(Plugin));