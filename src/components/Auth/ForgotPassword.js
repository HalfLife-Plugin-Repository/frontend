import React, {Component} from 'react';
import Button from 'components/Button';
import Container from 'components/Container';
import Flex from 'components/Flex';
import TextField from 'components/TextField';
import HelpMessage from './HelpMessage';
import {animations, common} from 'styles';

const style = {
    container: {
        width: 450
    }
};

class ForgotPassword extends Component {
    constructor(props){
        super(props);
        this.state = {
            email: ''
        };
    }

    handleChange = (name, value) => {
        this.setState({
            [name]: value
        })
    };

    render(){
        return (
            <div>
                <Container
                    header="Forgot Password"
                    style={style.container}>
                    <div style={common.form}>
                        <TextField
                            label="Email"
                            name="email"
                            onChange={this.handleChange}
                            value={this.state.email}/>
                        <Flex
                            align="center"
                            justify="flex-end"
                            style={common.formActions}>
                            <Button label="Send Reset Link"/>
                        </Flex>
                    </div>
                </Container>
                <HelpMessage
                    action="Log In"
                    actionTo="/login"
                    question="You just remembered it?"/>
            </div>
        )
    }
}

export default ForgotPassword;