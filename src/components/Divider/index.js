import React, {PropTypes} from 'react';
import {grey200} from 'styles';

const style = {
    divider: {
        height: 1,
        backgroundColor: grey200
    }
};

const Divider = (props) => (
    <div style={Object.assign({}, style.divider, props.style)}/>
);

Divider.propTypes = {
    style: PropTypes.object
};

export default Divider;