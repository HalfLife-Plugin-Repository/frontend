import React from 'react';
import Flex from 'components/Flex';
import PluginList from 'components/PluginList';
import {common, grey100} from 'styles';
import homeStyle from './style';

const style = {
    container: {
        minHeight: '50vh',
        width: '100%',
        height: 'auto',
        backgroundColor: grey100
    }
};

const plugins = [
    {
        mod: 'amx',
        description: 'Some description of the plugin.',
        last_updated: 'Some Date',
        title: 'Title of the Plugin',
        author: 'Zach Perkitny'
    },
    {
        mod: 'sm',
        description: 'Some description of the plugin.',
        last_updated: 'Some Date',
        title: 'Title of the Plugin',
        author: 'Zach Perkitny'
    },
    {
        mod: 'mm',
        description: 'Some description of the plugin.',
        last_updated: 'Some Date',
        title: 'Title of the Plugin',
        author: 'Zach Perkitny'
    },
    {
        mod: 'amx',
        description: 'Some description of the plugin.',
        last_updated: 'Some Date',
        title: 'Title of the Plugin',
        author: 'Zach Perkitny'
    },
    {
        mod: 'sm',
        description: 'Some description of the plugin.',
        last_updated: 'Some Date',
        title: 'Title of the Plugin',
        author: 'Zach Perkitny'
    },
    {
        mod: 'mm',
        description: 'Some description of the plugin.',
        last_updated: 'Some Date',
        title: 'Title of the Plugin',
        author: 'Zach Perkitny'
    },
    {
        mod: 'sm',
        description: 'Some description of the plugin.',
        last_updated: 'Some Date',
        title: 'Title of the Plugin',
        author: 'Zach Perkitny'
    },
    {
        mod: 'amx',
        description: 'Some description of the plugin.',
        last_updated: 'Some Date',
        title: 'Title of the Plugin',
        author: 'Zach Perkitny'
    },
    {
        mod: 'sm',
        description: 'Some description of the plugin.',
        last_updated: 'Some Date',
        title: 'Title of the Plugin',
        author: 'Zach Perkitny'
    },
    {
        mod: 'mm',
        description: 'Some description of the plugin.',
        last_updated: 'Some Date',
        title: 'Title of the Plugin',
        author: 'Zach Perkitny'
    }
];

const PopularPlugins = (props) => (
    <Flex
        column={true}
        align="center"
        style={[
            homeStyle.section,
            style.container
    ]}>
        <div style={common.content}>
            <h3 style={common.grey900}>
                Popular Plugins
            </h3>
            <Flex column={true}>
                <PluginList plugins={plugins}/>
            </Flex>
        </div>
    </Flex>
);

export default PopularPlugins;