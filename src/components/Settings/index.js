import React, {Component} from 'react';
import {connect} from 'react-redux';
import {loadUser} from 'actions/users';
import Container from 'components/Container';
import Flex from 'components/Flex';
import Spinner from 'components/Spinner';
import ChangePassword from './ChangePassword';
import LanguageSettings from './LanguageSettings';
import ProfileSettings from './ProfileSettings';
import phrases from 'lang';
import {common, grey100} from 'styles';

const style = {
    settings: {
        width: 960
    }
};

class Settings extends Component {
    render(){
        const {
            isAuthenticating
        } = this.props;
        let content = null;
        if(isAuthenticating){
            content = <Spinner/>;
        } else {
            content = [
                <Container
                    header={phrases.general}
                    key={1}
                    style={style.settings}>
                    <ProfileSettings/>
                </Container>,
                <Container
                    header={phrases.language}
                    key={2}
                    style={style.settings}>
                    <LanguageSettings/>
                </Container>,
                <Container
                    header={phrases.change_password}
                    key={3}
                    style={style.settings}>
                    <ChangePassword/>
                </Container>
        ];
        }
        return (
            <Flex
                align="center"
                column={true}
                style={[
                    common.borderBox,
                    common.container
                ]}>
                {content}
            </Flex>
        )
    }
}

const mapStateToProps = (state) => {
    const isAuthenticating = state.auth.isAuthenticating;
    return {
        isAuthenticating
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        loadUser: (id) => dispatch(loadUser(id))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Settings);