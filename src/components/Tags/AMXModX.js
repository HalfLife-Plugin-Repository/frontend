import React from 'react';
import Radium from 'radium';
import {common, black} from 'styles';

const style = {
    shadow:{
        boxShadow: `0 2px 1px ${black}`
    }
};

const AMXModX = () => (
    <h4 style={[
        common.grey900,
        style.shadow
    ]}>
        &lambda;MX
    </h4>
);

export default Radium(AMXModX);