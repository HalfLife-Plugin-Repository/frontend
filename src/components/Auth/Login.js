import React, {Component} from 'react';
import {connect} from 'react-redux';
import {logIn} from 'actions/auth';
import {LocalForm, Control} from 'react-redux-form';
import Button from 'components/Button';
import CheckBox from 'components/CheckBox';
import Container from 'components/Container';
import Divider from 'components/Divider';
import Flex from 'components/Flex';
import StyledLink from 'components/StyledLink';
import TextField from 'components/TextField';
import HelpMessage from './HelpMessage';
import {animations, common} from 'styles';

const style = {
    container:{
        width: 450
    },
    divider:{
        marginTop: 20
    },
    link: {
        marginTop: 20,
        display: 'inline-block'
    }
};

class Login extends Component {
    handleSubmit = (values) => {
        this.props.logIn(values);
    };

    render(){
        return (
            <div>
                <Container
                    header="Login"
                    style={style.container}>
                    <div style={common.form}>
                        <LocalForm
                            initialState={{
                                username: '',
                                password: ''
                            }}
                            onSubmit={this.handleSubmit}>
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
                                justify="space-between"
                                style={common.formActions}>
                                <CheckBox
                                    checked={true}
                                    label="Remember Me"
                                    name="rememberMe"/>
                                <Button
                                    label="Login"
                                    type="submit"/>
                            </Flex>
                            <Divider style={style.divider}/>
                            <StyledLink
                                to="/forgot-password"
                                style={[
                                    common.grey500,
                                    style.link
                                ]}>
                                Forgot Password?
                            </StyledLink>
                        </LocalForm>
                    </div>
                </Container>
                <HelpMessage
                    action="Register Now"
                    actionTo="/register"
                    question="Don't have an account?"/>
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
        logIn: (creds) => dispatch(logIn(creds))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
