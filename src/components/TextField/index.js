import React, {Component, PropTypes} from 'react';
import Radium from 'radium';
import Flex from 'components/Flex';
import {common, grey200, grey300, grey500, grey600, red500} from 'styles';

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
    },
    error: {
        color: red500,
        fontSize: 13,
        marginTop: 5
    }
};

class TextField extends Component {
    static defaultProps = {
        type: 'text'
    };

    static propTypes = {
        error: PropTypes.string,
        label: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        onBlur: PropTypes.func,
        onChange: PropTypes.func,
        onFocus: PropTypes.func,
        type: PropTypes.string,
        value: PropTypes.string.isRequired
    };

    onBlur = (e) => {
        if(this.props.onBlur){
            this.props.onBlur(e);
        }
    };

    onChange = (e) => {
        if(this.props.onChange){
            this.props.onChange(e);
        }
    };

    onFocus = (e) => {
        if(this.props.onFocus){
            this.props.onFocus(e);
        }
    };

    render(){
        const {
            error,
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
                    onBlur={this.onBlur}
                    onChange={this.onChange}
                    onFocus={this.onFocus}
                    style={[
                        common.borderBox,
                        style.input
                    ]}
                    type={type}
                    value={value}/>
                {error &&
                    <span style={style.error}>
                        {error}
                    </span>
                }
            </Flex>
        )
    }
}

export default Radium(TextField);