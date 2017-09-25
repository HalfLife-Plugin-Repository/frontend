import React, {PropTypes} from 'react';
import Radium from 'radium';
import {animations, common, grey300, blue500} from 'styles';

const getStyles = (props) => {
    const { color, size } = props;
    return {
        container: {
            position: 'absolute',
            height: size,
            width: size,
            top: '50%',
            left: '50%',
            margin: `-${size/2}px 0 0 -${size/2}px`
        },
        before: {
            borderRadius: '50%',
            width: size,
            height: size,
            borderTop: `solid 6px ${grey300}`,
            borderRight: `solid 6px ${grey300}`,
            borderBottom: `solid 6px ${grey300}`,
            borderLeft: `solid 6px ${grey300}`,
            position: 'absolute',
            top: 0,
            left: 0
        },
        after: {
            borderRadius: '50%',
            width: size,
            height: size,
            borderTop: `solid 6px ${color}`,
            borderRight: `solid 6px ${grey300}`,
            borderBottom: `solid 6px ${grey300}`,
            borderLeft: `solid 6px ${grey300}`,
            position: 'absolute',
            top: 0,
            left: 0
        }
    };
};

const Spinner = (props) => {
    const style = getStyles(props);
    return (
        <div style={[
            common.borderBox,
            common.inlineBlock,
            style.container
        ]}>
            <span style={[
                common.borderBox,
                common.inlineBlock,
                style.before
            ]}/>
            <span style={[
                animations.rotate,
                common.borderBox,
                common.inlineBlock,
                style.after
            ]}/>
        </div>
    )
};

Spinner.defaultProps = {
    color: blue500,
    size: 36
};

Spinner.propTypes = {
    color: PropTypes.string,
    size: PropTypes.number
};

export default Radium(Spinner);