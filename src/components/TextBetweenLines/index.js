import React from 'react';
import PropTypes from 'prop-types';
import {grey200, grey700, white} from 'styles';

const getStyle = (props) => {
    const {
        backgroundColor,
        borderColor,
        textColor
    } = props;

    return {
        container: {
            lineHeight: '0.1em',
            borderBottom: `1px solid ${borderColor}`,
            textAlign: 'center',
            margin: '20px 0'
        },
        text: {
            backgroundColor,
            color: textColor,
            padding: '0 10px',
            fontFamily: 'inherit'
        }
    }
};

const TextBetweenLines = (props) => {
    const style = getStyle(props);
    return (
        <h5 style={style.container}>
            <span style={style.text}>
                {props.text}
            </span>
        </h5>
    )
};

TextBetweenLines.defaultProps = {
    backgroundColor: white,
    borderColor: grey200,
    textColor: grey700
};

TextBetweenLines.propTypes = {
    backgroundColor: PropTypes.string,
    borderColor: PropTypes.string,
    text: PropTypes.string.isRequired,
    textColor: PropTypes.string
};

export default TextBetweenLines;