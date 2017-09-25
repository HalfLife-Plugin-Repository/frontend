import React, {PropTypes} from 'react';

const getStyle = (props) => {
    const {circular, size} = props;
    const style = {
        avatar: {
            verticalAlign: 'middle',
            height: size,
            width: size
        }
    };
    if(circular){
        style.avatar.borderRadius = '50%';
    }
    return style;
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
    src: PropTypes.string.isRequired
};

export default Avatar;