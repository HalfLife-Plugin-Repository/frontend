import React, {Component} from 'react';
import {connect} from 'react-redux';
import {loadPlugins} from 'actions/plugins';
import {fetchUser} from 'actions/users';
import Avatar from 'components/Avatar';
import Container from 'components/Container';
import Flex from 'components/Flex';
import PluginList from 'components/PluginList';
import Spinner from 'components/Spinner';
import Links from './Links';
import phrases from 'lang';
import {common, grey100} from 'styles';

const style = {
    container: {
        position: 'relative',
        width: '100%',
        minHeight: 'calc(100vh - 97px)',
        height: 'auto',
        backgroundColor: grey100,
        paddingBottom: 40
    },
    profile: {
        width: 960,
        textAlign: 'center'
    },
    plugins: {
        width: 960
    },
    pluginsContent: {
        paddingTop: 20,
        paddingLeft: 20
    },
    username: {
        marginTop: '1em'
    }
};

class Profile extends Component {
    componentWillMount(){
        const id = this.props.id;
        this.props.fetchUser(id);
        this.props.loadPlugins({user: id});
    }

    render(){
        const {
            count,
            isFetching,
            plugins,
            user
        } = this.props;
        let content = null;
        if(!user || isFetching){
            content = <Spinner/>;
        } else {
            content = (
                <div>
                    <Container style={style.profile}>
                        <Avatar
                            circular={false}
                            size={150}
                            src="https://www.gravatar.com/avatar/94d093eda664addd6e450d7e9881bcad?s=150&d=identicon&r=PG"/>
                        <h4 style={Object.assign({}, common.grey600, style.username)}>
                            {user.username}
                        </h4>
                        {count &&
                        <h5 style={common.grey500}>
                            {count}&nbsp;{(count === 1) ? phrases.plugin : phrases.plugins}
                        </h5>
                        }
                        <Links
                            alliedmodders={user.alliedmodders}
                            github={user.github}
                            twitter={user.twitter}/>
                    </Container>
                    <Container
                        header={phrases.plugins}
                        style={style.plugins}>
                        <div style={style.pluginsContent}>
                            <PluginList plugins={plugins}/>
                        </div>
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

const mapStateToProps = (state, props) => {
    const id = props.params.id;
    const {
        entities: {
            plugins,
            users
        },
        visible_plugins: {
            count,
            ids,
            isFetching
        }
    } = state;
    const userPlugins = (ids || []).map((id) => plugins[id]);
    const user = users[id];
    return {
        count,
        id,
        isFetching,
        plugins: userPlugins,
        user
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchUser: (id) => dispatch(fetchUser(id)),
        loadPlugins: (query) => dispatch(loadPlugins(query))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);