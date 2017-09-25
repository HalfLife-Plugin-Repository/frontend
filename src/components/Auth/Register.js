import React, {Component} from 'react';
import Button from 'components/Button';
import Container from 'components/Container';
import Flex from 'components/Flex';
import TextField from 'components/TextField';
import HelpMessage from './HelpMessage';
import {animations, common} from 'styles';

const style = {
    container:{
        width: 450
    }
};

class Register extends Component {
    constructor(props){
        super(props);
        this.state = {
            email: '',
            username: '',
            password: ''
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
                    header="Register"
                    style={style.container}>
                    <div style={common.form}>
                        <TextField
                            label="Email"
                            name="email"
                            onChange={this.handleChange}
                            value={this.state.email}/>
                        <TextField
                            label="Username"
                            name="username"
                            onChange={this.handleChange}
                            value={this.state.username}/>
                        <TextField
                            label="Password"
                            name="password"
                            onChange={this.handleChange}
                            type="password"
                            value={this.state.password}/>
                        <Flex
                            align="center"
                            justify="flex-end"
                            style={common.formActions}>
                            <Button label="Register"/>
                        </Flex>
                    </div>
                </Container>
                <HelpMessage
                    action="Log In"
                    actionTo="/login"
                    question="Already have an account?"/>
            </div>
        )
    }
}

export default Register;