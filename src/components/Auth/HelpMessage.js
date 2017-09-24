import React, {PropTypes} from 'react';
import Radium from 'radium';
import StyledLink from 'components/StyledLink';
import {common} from 'styles';

const style = {
    container: {
        marginTop: 20
    }
};

const HelpMessage = (props) => (
    <div style={[
        common.center,
        common.white,
        style.container
    ]}>
        {props.question}
        <StyledLink
            to={props.actionTo}
            style={[
                common.strong,
                common.white,
                common.noTextDecoration
            ]}>
            &nbsp;{props.action}
        </StyledLink>
    </div>
);

HelpMessage.propTypes = {
    action: PropTypes.string.isRequired,
    actionTo: PropTypes.string.isRequired,
    question: PropTypes.string.isRequired
};

export default Radium(HelpMessage);