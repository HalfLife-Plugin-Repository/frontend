import React, {PropTypes} from 'react';
import Radium from 'radium';
import {common, blue500, blue700, white} from 'styles';

const style = {
    base: {
        height: 45,
        padding: '10px 15px',
        minWidth: 113,
        borderRadius: 50,
        border: 'none',
        textAlign: 'center',
        outline: 'none',
        transition: 'all 0.5s ease',
        fontSize: 14.5,
        fontWeight: 700,
        cursor: 'pointer'
    },
    filled: {
        backgroundColor: blue500,
        ':hover': {
            backgroundColor: blue700
        }
    },
    unfilled: {
        border: `3px solid ${white}`,
        backgroundColor: 'transparent',
        ':hover': {
            color: blue500,
            backgroundColor: white
        }
    }
};

const Button = (props) => (
    <button
        onClick={props.onClick}
        style={[
            common.white,
            style.base,
            props.filled ? style.filled : style.unfilled]}>
        {props.label}
    </button>
);

Button.defaultProps = {
    filled: true,
    onClick: () => {}
};

Button.propTypes = {
    filled: PropTypes.bool,
    label: PropTypes.string.isRequired,
    onClick: PropTypes.func
};

export default Radium(Button);