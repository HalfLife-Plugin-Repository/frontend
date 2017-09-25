import React, {PropTypes} from 'react';
import Divider from 'components/Divider';

import {common, white} from 'styles';

const style = {
    container: {
        backgroundColor: white,
        borderRadius: 5,
        marginTop: 20,
        paddingBottom: 20,
        paddingTop: 20
    },
    header: {
        paddingLeft: 40,
        paddingBottom: 20,
        margin: 0
    }
};

const Container = (props) => (
    <div style={Object.assign({},
        style.container,
        props.style
    )}>
        {props.header &&
            <div>
                <h4 style={Object.assign({},
                    common.grey600,
                    style.header
                )}>
                    {props.header}
                </h4>
                <Divider/>
            </div>
        }
        {props.children}
    </div>
);

Container.propTypes = {
    header: PropTypes.string,
    style: PropTypes.object
};

export default Container;