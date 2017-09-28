import fetch from 'isomorphic-fetch';
import printf from 'printf';
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {register} from 'actions/auth';
import {API_URL} from 'constants/api';
import {LocalForm, Control} from 'react-redux-form';
import Button from 'components/Button';
import Container from 'components/Container';
import Flex from 'components/Flex';
import TextField from 'components/TextField';
import HelpMessage from './HelpMessage';
import phrases from 'lang';
import {required, isEmail, REQUIRED_TEXT, IS_EMAIL} from 'utils/validation';
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

    checkUserNameAvailability = (username, done) => {
        fetch(`${API_URL}/user/accounts/check_availability/${username}/`)
            .then((response) => response.json())
            .then((json) => {
                done(json.available);
            });
    };

    render(){
        return (
            <div>
                <Container
                    header={phrases.register}
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
                                        label={phrases.email}
                                        {...props}/>
                                }
                                mapProps={{
                                    error: ({fieldValue: {errors, touched}}) => {
                                        if(touched){
                                            if(errors.required){
                                                return phrases.validation_required;
                                            } else if(errors.isEmail){
                                                return phrases.validation_email;
                                            }
                                        }
                                        return null;
                                    }
                                }}
                                model=".email"
                                validators={{required, isEmail}}
                            />
                            <Control
                                asyncValidators={{
                                    available: this.checkUserNameAvailability
                                }}
                                component={(props) =>
                                    <TextField
                                        label={phrases.username}
                                        {...props}/>
                                }
                                mapProps={{
                                    error: ({fieldValue: {errors, touched, value}}) => {
                                        if(touched){
                                            if(errors.required){
                                                return phrases.validation_required;
                                            } else if(errors.available){
                                                return printf(phrases.validation_username_taken, value);
                                            }
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
                                justify="flex-end"
                                style={common.formActions}>
                                <Button
                                    label={phrases.register}
                                    type="submit"/>
                            </Flex>
                        </LocalForm>
                    </div>
                </Container>
                <HelpMessage
                    action={phrases.log_in}
                    actionTo="/login"
                    question={phrases.register_question}/>
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