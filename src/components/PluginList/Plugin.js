import React, {PropTypes} from 'react';
import Radium from 'radium';
import Divider from 'components/Divider';
import StyledLink from 'components/StyledLink';
import {AMXModX, MetaMod, SourceMod} from 'components/Tags';
import {common, blue500, blue700, grey300} from 'styles';

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

const Plugin = (props) => (
    <div style={style.container}>
        <div style={style.tag}>
            {{
                'amx': <AMXModX/>,
                'mm': <MetaMod/>,
                'sm': <SourceMod/>
            }[props.plugin.mod]}
        </div>
        <div style={style.content}>
            <h5 style={[
                common.inlineBlock,
                common.grey700
            ]}>
                {props.plugin.title}&nbsp;
            </h5>
            <span style={common.grey500}>
                by&nbsp;
                <StyledLink
                    to="/"
                    style={[
                        common.noTextDecoration,
                        style.link
                    ]}>
                    {props.plugin.author}
                </StyledLink>
            </span>
            <p style={common.grey500}>{props.plugin.description}</p>
            <span style={[
                common.grey500,
                style.last_updated
            ]}>
                Last Updated {props.plugin.last_updated}
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
    showDivider: PropTypes.bool
};

export default Radium(Plugin);