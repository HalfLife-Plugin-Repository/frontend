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
    container: {
        width: '100%',
        minHeight: 'calc(100vh - 97px)',
        height: 'auto',
        backgroundColor: grey100,
        paddingBottom: 40
    },
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
            content = (
                <div>
                    <Container
                        header={phrases.general}
                        style={style.settings}>
                        <ProfileSettings/>
                    </Container>
                    <Container
                        header={phrases.language}
                        style={style.settings}>
                        <LanguageSettings/>
                    </Container>
                    <Container
                        header={phrases.change_password}
                        style={style.settings}>
                        <ChangePassword/>
                    </Container>
                </div>
            );
        }
        return (
            <div>
                <Flex
                    justify="center"
                    style={[
                        common.borderBox,
                        style.container
                    ]}>
                    {content}
                </Flex>
            </div>
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