import fetch from 'isomorphic-fetch';
import React, {Component} from 'react';
import {API_URL} from 'constants/api';
import {LocalForm, Control} from 'react-redux-form';
import Button from 'components/Button';
import Flex from 'components/Flex';
import TextField from 'components/TextField';
import phrases from 'lang';
import {required} from 'utils/validation';
import {common} from 'styles';

class ChangePassword extends Component {
    handleSubmit = (values) => {
        fetch(`${API_URL}/user/accounts/change_password/`, {
            method: 'POST',
            body: JSON.stringify(values),
            headers: {
                'Authorization': `JWT ${localStorage.getItem('token')}`,
                'Content-Type': 'application/json'
            }
        });
    };

    render(){
        return (
            <div style={common.form}>
                <LocalForm
                    initialState={{
                        old_password: '',
                        new_password: ''
                    }}
                    onSubmit={this.handleSubmit}>
                    <Control
                        component={(props) =>
                            <TextField
                                label={phrases.old_password}
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
                        model=".old_password"
                        validators={{required}}
                    />
                    <Control
                        component={(props) =>
                            <TextField
                                label={phrases.new_password}
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
                        model=".new_password"
                        validators={{required}}
                    />
                    <Flex
                        align="center"
                        justify="flex-end"
                        style={common.formActions}>
                        <Button
                            label={phrases.change}
                            type="submit"/>
                    </Flex>
                </LocalForm>
            </div>
        )
    }
}

export default ChangePassword;