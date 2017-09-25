import React from 'react';
import {white} from 'styles';

const getStyles = (props) => {
    const {
        open,
        style
    } = props;
    return {
        container: {
            display: (open) ? 'initial' : 'none',
            position: 'absolute',
            left: 0,
            color: white,
            width: '100%',
            zIndex: 1001,
            ...style
        }
    }
};

const Menu = (props) => {
    const {
        children
    } = props;
    const style = getStyles(props);
    return (
        <div style={style.container}>
            <ul>
                {children}
            </ul>
        </div>
    )
};

export MenuItem from './MenuItem';
export default Menu;