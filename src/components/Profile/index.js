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
import {common} from 'styles';

const style = {
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
        this.loadData(this.props.params.id);
    }

    componentWillReceiveProps(props){
        const id = props.params.id;
        if(id !== this.props.params.id){
            this.loadData(id);
        }
    }

    loadData(id){
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
            content = [
                <Container
                    key={0}
                    style={style.profile}>
                    <Avatar
                        circular={false}
                        size={150}
                        src={`${user.avatar}?d=retro&s=150`}/>
                    <h4 style={Object.assign({}, common.grey600, style.username)}>
                        {user.username}
                    </h4>
                    {!!count &&
                    <h5 style={common.grey500}>
                        {count}&nbsp;{(count === 1) ? phrases.plugin : phrases.plugins}
                    </h5>
                    }
                    <Links
                        alliedmodders={user.alliedmodders}
                        github={user.github}
                        twitter={user.twitter}/>
                </Container>,
                <Container
                    header={phrases.plugins}
                    key={1}
                    style={style.plugins}>
                    <div style={style.pluginsContent}>
                        <PluginList plugins={plugins}/>
                    </div>
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

const mapStateToProps = (state, props) => {
    const id = props.params.id;
    const {
        entities: {
            plugins,
            users
        },
        visible_plugins: {
            ids,
            isFetching
        }
    } = state;
    const userPlugins = (ids || []).map((id) => plugins[id]);
    const count = userPlugins.length;
    const user = users[id];
    return {
        count,
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