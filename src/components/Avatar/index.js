import React from 'react';
import PropTypes from 'prop-types';

const getStyle = (props) => {
    const {circular, size, style: propStyle} = props;
    return {
        avatar: {
            verticalAlign: 'middle',
            height: size,
            width: size,
            borderRadius: (circular) ? '50%' : '10%',
            ...propStyle
        }
    }
};

const Avatar = (props) => {
    const style = getStyle(props);
    return (
        <img
            alt={props.alt}
            src={props.src}
            style={style.avatar}/>
    )
};

Avatar.defaultProps = {
    circular: true,
    size: 50
};

Avatar.propTypes = {
    alt: PropTypes.string,
    circular: PropTypes.bool,
    size: PropTypes.number,
    src: PropTypes.string.isRequired,
    style: PropTypes.object
};

export default Avatar;