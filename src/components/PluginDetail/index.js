import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchPlugin} from 'actions/plugins';
import Container from 'components/Container';
import Flex from 'components/Flex';
import Spinner from 'components/Spinner';
import Description from './Description';
import Details from './Details';
import {common} from 'styles';

const style = {
    plugin: {
        width: 960
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
            content = [
                <Container
                    header={plugin.name}
                    key={0}
                    style={style.plugin}>
                    <Details
                        author={author}
                        collaborators={collaborators}
                        plugin={plugin}/>
                </Container>,
                <Container
                    key={1}
                    style={style.plugin}>
                    <Description
                        source={plugin.description}/>
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