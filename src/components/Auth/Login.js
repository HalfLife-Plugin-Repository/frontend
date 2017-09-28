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
import phrases from 'lang';
import {required, REQUIRED_TEXT} from 'utils/validation';
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
                    header={phrases.login}
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
                                        label={phrases.username}
                                        error="Test"
                                        {...props}/>
                                }
                                mapProps={{
                                    error: ({fieldValue: {errors, touched}}) => {
                                        if(touched && errors.required){
                                            return phrases.validation_required;
                                        }
                                        return null;
                                    }
                                }}
                                model=".username"
                                validators={{required}}
                            />
                            <Control
                                component={(props) =>
                                    <TextField
                                        label={phrases.password}
                                        type="password"
                                        {...props}/>
                                }
                                mapProps={{
                                    error: ({fieldValue: {errors, touched}}) => {
                                        if(touched && errors.required){
                                            return phrases.validation_required;
                                        }
                                        return null;
                                    }
                                }}
                                model=".password"
                                validators={{required}}
                            />
                            <Flex
                                align="center"
                                justify="space-between"
                                style={common.formActions}>
                                <CheckBox
                                    checked={true}
                                    label={phrases.remember_me}
                                    name="rememberMe"/>
                                <Button
                                    label={phrases.login}
                                    type="submit"/>
                            </Flex>
                            <Divider style={style.divider}/>
                            <StyledLink
                                to="/forgot-password"
                                style={[
                                    common.grey500,
                                    style.link
                                ]}>
                                {phrases.forgot_password_q}
                            </StyledLink>
                        </LocalForm>
                    </div>
                </Container>
                <HelpMessage
                    action={phrases.register_now}
                    actionTo="/register"
                    question={phrases.login_question}/>
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
