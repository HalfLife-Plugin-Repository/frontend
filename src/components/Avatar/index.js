import React, {PropTypes} from 'react';

const style = {
    avatar: {
        borderRadius: '50%',
        verticalAlign: 'middle'
    }
};

const Avatar = (props) => (
    <img
        alt={props.alt}
        src={props.src}
        style={Object.assign({},
            style.avatar,
            {
                width: props.size,
                height: props.size
            }
        )}/>
);

Avatar.defaultProps = {
    size: 50
};

Avatar.propTypes = {
    alt: PropTypes.string,
    size: PropTypes.number,
    src: PropTypes.string.isRequired
};

export default Avatar;