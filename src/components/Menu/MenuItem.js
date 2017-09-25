import React, {cloneElement} from 'react';
import Radium from 'radium';
import {common} from 'styles';

const getStyle = (props) => {
    const {
        hoverStyle
    } = props;
    return {
        container: {
            listStyle: 'none',
            transition: '0.6s ease all',
            ':hover': {
                ...hoverStyle
            }
        },
        child: {
            display: 'block',
            padding: '1em'
        }
    }
};

const MenuItem = (props) => {
    const {
        children,
        onClick
    } = props;
    const style = getStyle(props);
    return (
        <li
            onClick={onClick}
            style={style.container}>
            {cloneElement(children, {
                style: Object.assign({}, common.white, style.child)
            })}
        </li>
    )
};

export default Radium(MenuItem);