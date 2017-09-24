import React, {Component, PropTypes} from 'react';
import Radium from 'radium';
import Flex from 'components/Flex';
import {common, grey200, grey300, grey500, grey600} from 'styles';

const style = {
    container: {
        marginTop: 20
    },
    input: {
        borderRadius: 5,
        backgroundColor: grey200,
        outline: 'none',
        border: 'none',
        height: 48,
        padding: '8px 8px 8px 16px',
        fontSize: 16,
        color: grey600,
        transition: 'background-color 0.37s ease-out',
        ':focus': {
            backgroundColor: grey300
        }
    },
    label: {
        fontSize: 14,
        color: grey500,
        marginBottom: 5
    }
};

class TextField extends Component {
    static defaultProps = {
        type: 'text'
    };

    static propTypes = {
        label: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        onChange: PropTypes.func.isRequired,
        type: PropTypes.string,
        value: PropTypes.string.isRequired
    };

    onChange = (e) => {
        this.props.onChange(this.props.name, e.target.value);
    };

    render(){
        const {
            label,
            name,
            type,
            value
        } = this.props;
        return (
            <Flex
                column={true}
                style={style.container}>
                <label
                    htmlFor={name}
                    style={style.label}>
                    {label}
                </label>
                <input
                    name={name}
                    onChange={this.onChange}
                    style={[
                        common.borderBox,
                        style.input
                    ]}
                    type={type}
                    value={value}/>
            </Flex>
        );
    }
}

export default Radium(TextField);