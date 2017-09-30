import React from 'react';
import PropTypes from 'prop-types';
import Flex from 'components/Flex';
import {common, blue500} from 'styles';

const style = {
    iconContainer: {
        backgroundColor: blue500,
        height: 72,
        width: 72,
        borderRadius: '100%',
        marginBottom: '0.33em'
    }
};

const Stat = (props) => (
    <Flex
        basis="150px"
        column={true}
        align="center">
        <Flex
            align="center"
            justify="center"
            style={style.iconContainer}>
            {props.icon}
        </Flex>
        <h4 style={common.grey600}>
            {props.stat}
        </h4>
        <h5 style={Object.assign({},
            common.grey500,
            common.light
        )}>
            {props.count}
        </h5>
    </Flex>
);

Stat.propTypes = {
    count: PropTypes.number.isRequired,
    icon: PropTypes.node.isRequired,
    stat: PropTypes.string.isRequired
};

export default Stat;