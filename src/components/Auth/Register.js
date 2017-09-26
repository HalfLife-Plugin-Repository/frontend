import React, {Component} from 'react';
import {connect} from 'react-redux';
import {register} from 'actions/auth';
import {LocalForm, Control} from 'react-redux-form';
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
    handleSubmit = (values) => {
        this.props.register(values);
    };

    render(){
        return (
            <div>
                <Container
                    header="Register"
                    style={style.container}>
                    <div style={common.form}>
                        <LocalForm
                            initialState={{
                                email: '',
                                username: '',
                                password: ''
                            }}
                            onSubmit={this.handleSubmit}>
                            <Control
                                component={(props) =>
                                    <TextField
                                        label="Email"
                                        {...props}/>
                                }
                                model=".email"
                            />
                            <Control
                                component={(props) =>
                                    <TextField
                                        label="Username"
                                        {...props}/>
                                }
                                model=".username"
                            />
                            <Control
                                component={(props) =>
                                    <TextField
                                        label="Password"
                                        type="password"
                                        {...props}/>
                                }
                                model=".password"
                            />
                            <Flex
                                align="center"
                                justify="flex-end"
                                style={common.formActions}>
                                <Button
                                    label="Register"
                                    type="submit"/>
                            </Flex>
                        </LocalForm>
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

const mapStateToProps = (state) => {
    return {
        isAuthenticating: state.auth.isAuthenticating
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        register: (creds) => dispatch(register(creds))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Register);