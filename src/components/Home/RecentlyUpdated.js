import React, {Component} from 'react';
import {connect} from 'react-redux';
import {loadRecentlyUpdated} from 'actions/plugins';
import Flex from 'components/Flex';
import PluginList from 'components/PluginList';
import Spinner from 'components/Spinner';
import phrases from 'lang';
import {common, grey100} from 'styles';
import homeStyle from './style';

const style = {
    container: {
        minHeight: '30vh',
        width: '100%',
        height: 'auto',
        backgroundColor: grey100
    }
};

class RecentlyUpdated extends Component {
    componentWillMount(){
        this.props.loadRecentlyUpdated();
    }

    render(){
        const {
            isFetching,
            plugins
        } = this.props;
        let content = null;
        if(isFetching){
            content = <Spinner/>;
        } else {
            content = (
                <Flex column={true}>
                    <PluginList plugins={plugins}/>
                </Flex>
            );
        }
        return (
            <Flex
                column={true}
                align="center"
                style={[
                    homeStyle.section,
                    style.container
                ]}>
                <div style={common.content}>
                    <h3 style={common.grey900}>
                        {phrases.recently_updated}
                    </h3>
                    {content}
                </div>
            </Flex>
        )
    }
}

const mapStateToProps = (state) => {
    const {
        entities: {
            plugins
        },
        visible_plugins: {
            ids,
            isFetching
        }
    } = state;

    const visiblePlugins = (ids || []).map((id) => plugins[id]);

    return {
        isFetching,
        plugins: visiblePlugins
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        loadRecentlyUpdated: () => dispatch(loadRecentlyUpdated())
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(RecentlyUpdated);