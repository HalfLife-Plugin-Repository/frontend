import React, {PropTypes} from 'react';
import Plugin from './Plugin';

const PluginList = (props) => (
    <div>
        {props.plugins.map((plugin, index) => (
            <Plugin
                key={index}
                plugin={plugin}
                showDivider={index !== props.plugins.length - 1}/>
        ))}
    </div>
);

PluginList.propTypes = {
    plugins: PropTypes.array.isRequired
};

export default PluginList;