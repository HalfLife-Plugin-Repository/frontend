import React, {Component} from 'react';
import {connect} from 'react-redux';
import fetchStats from 'actions/stats';
import MdApps from 'react-icons/lib/md/apps';
import MdPeople from 'react-icons/lib/md/people';
import MdFileDownload from 'react-icons/lib/md/file-download';
import Flex from 'components/Flex';
import Stat from './Stat';
import {common, blue500, white} from 'styles';
import homeStyle from './style';

const style = {
    container: {
        width: '100%',
        backgroundColor: white
    }
};

class Stats extends Component {
    componentWillMount(){
        this.props.fetchStats();
    }

    render(){
        const {
            data,
            isFetching
        } = this.props;
        let stats = null;
        if(!isFetching && data){
            stats = (
                <Flex
                    justify="space-around"
                    wrap={true}>
                    <Stat
                        count={data.plugin_count}
                        icon={<MdApps size={48} style={common.white}/>}
                        stat="Plugins"/>
                    <Stat
                        count={data.authors_count}
                        icon={<MdPeople size={48} style={common.white}/>}
                        stat="Authors"/>
                    <Stat
                        count={0}
                        icon={<MdFileDownload size={48} style={common.white}/>}
                        stat="Downloads"/>
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
                        Stats
                    </h3>
                    {stats}
                </div>
            </Flex>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        data: state.stats.data,
        isFetching: state.stats.isFetching
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchStats: () => dispatch(fetchStats())
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Stats);