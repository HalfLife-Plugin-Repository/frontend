import React, {Component} from 'react';
import {connect} from 'react-redux';
import {updateProfile} from 'actions/auth';
import {LocalForm, Control} from 'react-redux-form';
import Button from 'components/Button';
import Flex from 'components/Flex';
import TextField from 'components/TextField';
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
                                label="First Name"
                                {...props}/>
                        }
                        model=".first_name"
                    />
                    <Control
                        component={(props) =>
                            <TextField
                                label="Last Name"
                                {...props}/>
                        }
                        model=".last_name"
                    />
                    <Control
                        component={(props) =>
                            <TextField
                                label="Alliedmodders"
                                {...props}/>
                        }
                        model=".alliedmodders"
                    />
                    <Control
                        component={(props) =>
                            <TextField
                                label="Github"
                                {...props}/>
                        }
                        model=".github"
                    />
                    <Control
                        component={(props) =>
                            <TextField
                                label="Twitter"
                                {...props}/>
                        }
                        model=".twitter"
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
