import React, {Component, PropTypes} from 'react';
import MdCheck from 'react-icons/lib/md/check';
import Flex from 'components/Flex';
import {common, blue500, grey200, white} from 'styles';

const style = {
    container: {
        position: 'relative',
        width: 'auto'
    },
    input: {
        position: 'absolute',
        left: 0,
        top: 0,
        zIndex: 2,
        opacity: 0,
        width: '100%',
        height: '100%',
        cursor: 'pointer'
    },
    label: {
        fontSize: 16,
        marginLeft: 10
    },
    checkbox: {
        transition: 'background-color 0.37s ease-out',
        height: 24,
        width: 24,
        borderRadius: 5,
        textAlign: 'center',
        lineHeight: '20px',
    },
    unchecked: {
        backgroundColor: grey200
    },
    checked: {
        backgroundColor: blue500
    },
    icon: {
        fill: white,
        fontSize: 20
    }
};

class CheckBox extends Component {
    static propTypes = {
        checked: PropTypes.bool.isRequired,
        label: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        onChange: PropTypes.func.isRequired
    };

    onChange = (e) => {
        this.props.onChange(this.props.name, e.target.checked);
    };

    render(){
        const {
            checked,
            label,
            name
        } = this.props;
        return (
            <div style={style.container}>
                <input
                    name={name}
                    onChange={this.onChange}
                    type="checkbox"
                    style={style.input}
                    checked={checked}/>
                <Flex align="center">
                    <div style={Object.assign({},
                        style.checkbox,
                        checked ? style.checked : style.unchecked
                    )}>
                        {checked &&
                        <MdCheck style={style.icon}/>
                        }
                    </div>
                    <label
                        style={Object.assign({},
                            common.grey500,
                            style.label
                        )}>
                        {label}
                    </label>
                </Flex>
            </div>
        )
    }
}

export default CheckBox;