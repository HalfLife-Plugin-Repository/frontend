import React, {Component} from 'react';
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
    container: {
        width: 450
    }
};

class ForgotPassword extends Component {
    render(){
        return (
            <div>
                <Container
                    header={phrases.forgot_password}
                    style={style.container}>
                    <div style={common.form}>
                        <LocalForm
                            initialState={{
                                email: ''
                            }}>
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
                            <Flex
                                align="center"
                                justify="flex-end"
                                style={common.formActions}>
                                <Button label={phrases.send_reset_link}/>
                            </Flex>
                        </LocalForm>
                    </div>
                </Container>
                <HelpMessage
                    action={phrases.log_in}
                    actionTo="/login"
                    question={phrases.forgot_password_question}/>
            </div>
        )
    }
}

export default ForgotPassword;