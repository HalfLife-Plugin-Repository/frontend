import React, {Component} from 'react';
import {connect} from 'react-redux';
import {changePassword} from 'actions/auth';
import {LocalForm, Control} from 'react-redux-form';
import Button from 'components/Button';
import Flex from 'components/Flex';
import TextField from 'components/TextField';
import {common} from 'styles';

class ChangePassword extends Component {
    handleSubmit = (values) => {
        this.props.changePassword(values);
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
                                label="Old Password"
                                type="password"
                                {...props}/>
                        }
                        model=".old_password"
                    />
                    <Control
                        component={(props) =>
                            <TextField
                                label="New Password"
                                type="password"
                                {...props}/>
                        }
                        model=".new_password"
                    />
                    <Flex
                        align="center"
                        justify="flex-end"
                        style={common.formActions}>
                        <Button
                            label="Change"
                            type="submit"/>
                    </Flex>
                </LocalForm>
            </div>
        )
    }
}

const mapStateToProps = () => {
    return {}
};

const mapDispatchToProps = (dispatch) => {
    return {
        changePassword: (passwords) => dispatch(changePassword(passwords))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(ChangePassword);