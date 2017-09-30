import React, {Component} from 'react';
import {connect} from 'react-redux';
import {updateProfile} from 'actions/auth';
import FileUpload from 'components/FileUpload';
import {common} from 'styles';

const style = {
    container: {
        textAlign: 'center',
        padding: 20
    }
};

class AvatarSettings extends Component {
    handleChange = (content) => {
        this.props.updateProfile({
            avatar: content
        });
    };

    render(){
        const {
            avatar
        } = this.props;
        return (
            <div style={style.container}>
                <FileUpload
                    image={avatar}
                    onChange={this.handleChange}/>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    const currentUser = state.auth.currentUser;
    const avatar = currentUser && state.entities.users[currentUser.user_id].avatar;
    return {
        avatar
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        updateProfile: (profile) => dispatch(updateProfile(profile))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(AvatarSettings);