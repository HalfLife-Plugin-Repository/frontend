import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchPlugin} from 'actions/plugins';
import Container from 'components/Container';
import Flex from 'components/Flex';
import Spinner from 'components/Spinner';
import Collaborators from './Collaborators';
import Description from './Description';
import Details from './Details';
import Install from './Install';
import {common} from 'styles';

const style = {
    container: {
        ...common.container,
        ...common.borderBox
    },
    flex: {
        width: 1440,
        margin: '0 auto'
    },
    left: {
        flexBasis: '65%'
    },
    right: {
        flexBasis: '33%'
    }
};

class PluginDetail extends Component {
    componentWillMount(){
        const slug = this.props.params.slug;
        this.props.fetchPlugin(slug);
    }

    render(){
        const {
            author,
            collaborators,
            isFetching,
            plugin
        } = this.props;
        let content = null;
        if(isFetching){
            content = <Spinner/>;
        } else if(plugin) {
            content = (
                <Flex
                    justify="space-between"
                    style={style.flex}>
                    <div
                        key={0}
                        style={style.left}>
                        <Container
                            header={plugin.name}>
                            <Details
                                author={author}
                                collaborators={collaborators}
                                plugin={plugin}/>
                        </Container>
                        <Container
                            header="Description">
                            <Description
                                source={plugin.description}/>
                        </Container>
                    </div>
                    <div
                        key={1}
                        style={style.right}>
                        <Container
                            header="Install">
                            <Install name={plugin.slug}/>
                        </Container>
                        <Container
                            header="Collaborators">
                            <Collaborators collaborators={collaborators}/>
                        </Container>
                    </div>
                </Flex>
            );
        }
        return (
            <div
                style={style.container}>
                {content}
            </div>
        )
    }
}

const mapStateToProps = (state, props) => {
    const slug = props.params.slug;
    const {
        entities: {
            plugins,
            users
        },
        visible_plugins: {
            isFetching
        }
    } = state;
    const plugin = plugins[slug];
    const author = plugin && users[plugin.author];
    const collaborators = (plugin && plugin.collaborators || []).map((id) => users[id]);
    return {
        author,
        collaborators,
        isFetching,
        plugin
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchPlugin: (slug) => dispatch(fetchPlugin(slug))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(PluginDetail);