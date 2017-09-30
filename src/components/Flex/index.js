import React from 'react';
import PropTypes from 'prop-types';
import Radium from 'radium';

const flexProps = ['basis', 'column', 'align', 'justify', 'wrap'];

const flexPropToStyle = {
    basis: (v) => (['flexBasis', v]),
    column: (v) => (['flexDirection', (v) ? 'column' : 'row']),
    align: (v) => (['alignItems', v]),
    justify: (v) => (['justifyContent', v]),
    wrap: (v) => (['flexWrap', (v) ? 'wrap' : 'no-wrap'])
};

const createFlexStyle = (props) => {
    const style = {};
    let key;
    for(key in props){
        if(props.hasOwnProperty(key) && ~flexProps.indexOf(key)){
            const s = flexPropToStyle[key](props[key]);
            style[s[0]] = s[1];
        }
    }
    return style;
};

const style = {
    flex: {
        display: 'flex'
    }
};

const Flex = (props) => {
    const flexStyles = createFlexStyle(props);
    return (
        <div style={[
            style.flex,
            props.style,
            flexStyles
        ]}>
            {props.children}
        </div>
    )
};

Flex.propTypes = {
    basis: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    column: PropTypes.bool,
    align: PropTypes.string,
    justify: PropTypes.string,
    wrap: PropTypes.bool,
    style: PropTypes.oneOfType([PropTypes.array, PropTypes.object])
};

export default Radium(Flex);