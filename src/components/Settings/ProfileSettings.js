import printf from 'printf';
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {updateProfile} from 'actions/auth';
import {LocalForm, Control} from 'react-redux-form';
import Button from 'components/Button';
import Flex from 'components/Flex';
import TextField from 'components/TextField';
import phrases from 'lang';
import {maxLength} from 'utils/validation';
import {common} from 'styles';

class ProfileSettings extends Component {
    handleSubmit = (values) => {
        this.props.updateProfile(values);
    };

    render(){
        const {
            user
        } = this.props;
        let content = null;
        if(user){
            content = (
                <LocalForm
                    initialState={{
                        first_name: user.first_name,
                        last_name: user.last_name,
                        alliedmodders: user.alliedmodders,
                        github: user.github,
                        twitter: user.twitter
                    }}
                    onSubmit={this.handleSubmit}>
                    <Control
                        component={(props) =>
                            <TextField
                                label={phrases.first_name}
                                {...props}/>
                        }
                        mapProps={{
                            error: ({fieldValue: {errors, touched}}) => {
                                if(touched && errors.maxLength){
                                    return printf(phrases.validation_max_length, 30);
                                }
                                return null;
                            }
                        }}
                        model=".first_name"
                        validators={{
                            maxLength: maxLength(30)
                        }}
                    />
                    <Control
                        component={(props) =>
                            <TextField
                                label={phrases.last_name}
                                {...props}/>
                        }
                        mapProps={{
                            error: ({fieldValue: {errors, touched}}) => {
                                if(touched && errors.maxLength){
                                    return printf(phrases.validation_max_length, 150);
                                }
                                return null;
                            }
                        }}
                        model=".last_name"
                        validators={{
                            maxLength: maxLength(150)
                        }}
                    />
                    <Control
                        component={(props) =>
                            <TextField
                                label="Alliedmodders"
                                {...props}/>
                        }
                        mapProps={{
                            error: ({fieldValue: {errors, touched}}) => {
                                if(touched && errors.maxLength){
                                    return printf(phrases.validation_max_length, 25);
                                }
                                return null;
                            }
                        }}
                        model=".alliedmodders"
                        validators={{
                            maxLength: maxLength(25)
                        }}
                    />
                    <Control
                        component={(props) =>
                            <TextField
                                label="Github"
                                {...props}/>
                        }
                        mapProps={{
                            error: ({fieldValue: {errors, touched}}) => {
                                if(touched && errors.maxLength){
                                    return printf(phrases.validation_max_length, 39);
                                }
                                return null;
                            }
                        }}
                        model=".github"
                        validators={{
                            maxLength: maxLength(39)
                        }}
                    />
                    <Control
                        component={(props) =>
                            <TextField
                                label="Twitter"
                                {...props}/>
                        }
                        mapProps={{
                            error: ({fieldValue: {errors, touched}}) => {
                                if(touched && errors.maxLength){
                                    return printf(phrases.validation_max_length, 15);
                                }
                                return null;
                            }
                        }}
                        model=".twitter"
                        validators={{
                            maxLength: maxLength(15)
                        }}
                    />
                    <Flex
                        align="center"
                        justify="flex-end"
                        style={common.formActions}>
                        <Button
                            label="Save"
                            type="submit"/>
                    </Flex>
                </LocalForm>
            );
        }
        return (
            <div style={common.form}>
                {content}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    const currentUser = state.auth.currentUser;
    const user = currentUser && state.entities.users[currentUser.user_id];
    return {
        user
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        updateProfile: (profile) => dispatch(updateProfile(profile))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(ProfileSettings);
