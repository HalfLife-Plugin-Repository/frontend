import React, {Component} from 'react';
import {connect} from 'react-redux';
import {loadUser} from 'actions/users'
import Avatar from 'components/Avatar';
import Container from 'components/Container';
import Flex from 'components/Flex';
import Spinner from 'components/Spinner';
import {common, grey100} from 'styles';

const style = {
    container: {
        position: 'relative',
        width: '100%',
        minHeight: 'calc(100vh - 97px)',
        height: 'auto',
        backgroundColor: grey100
    },
    profile: {
        width: 960,
        textAlign: 'center'
    },
    plugins: {
        width: 960
    },
    username: {
        marginTop: '1em'
    }
};

class Profile extends Component {
    componentWillMount(){
        this.props.loadUser(this.props.id);
    }

    render(){
        const {
            user
        } = this.props;
        let content = null;
        if(!user){
            content = <Spinner/>;
        } else {
            content = (
                <Flex
                    column={true}
                    align="center"
                    style={style.container}>
                    <Container style={style.profile}>
                        <Avatar
                            circular={false}
                            size={150}
                            src="https://www.gravatar.com/avatar/94d093eda664addd6e450d7e9881bcad?s=150&d=identicon&r=PG"/>
                        <h4 style={Object.assign({}, common.grey600, style.username)}>
                            {user.username}
                        </h4>
                    </Container>
                    <Container
                        header="Plugins"
                        style={style.plugins}>

                    </Container>
                </Flex>
            );
        }
        return (
            <div>
                {content}
            </div>
        )
    }
}

const mapStateToProps = (state, props) => {
    const id = props.params.id;
    const user = state.entities.users[id];
    return {
        id,
        user
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        loadUser: (id) => dispatch(loadUser(id))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);