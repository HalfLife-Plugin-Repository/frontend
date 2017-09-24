import React from 'react';
import Radium from 'radium';
import MdSearch from 'react-icons/lib/md/search';
import Flex from 'components/Flex';
import {common, blue500, blue700, grey600, white} from 'styles';

const style = {
    container: {
        height: '50vh',
        width: '100%',
    },
    wrapper: {
        position: 'relative'
    },
    input: {
        borderRadius: 50,
        backgroundColor: white,
        paddingLeft: 40,
        outline: 'none',
        width: '100%',
        height: 50,
        border: 'none',
        fontSize: '1em',
        color: grey600
    },
    button: {
        position: 'absolute',
        backgroundColor: blue500,
        height: 45,
        width: 45,
        borderRadius: '100%',
        border: 'none',
        outline: 'none',
        top: 2.5,
        right: 2.5,
        cursor: 'pointer',
        ':hover': {
            backgroundColor: blue700
        }
    },
    icon: {
        fill: white,
        fontSize: 24
    }
};

const Search = (props) => (
    <Flex
        column={true}
        align="center"
        justify="center"
        style={[
            common.hGradient,
            style.container
    ]}>
        <div style={common.content}>
            <h2 style={[
                common.white,
                common.center
            ]}>
                The Simplest Way to find Half Life Plugins
            </h2>
            <div style={style.wrapper}>
                <input style={[common.borderBox, style.input]} type="text" placeholder="Search"/>
                <button style={style.button}>
                    <MdSearch style={style.icon}/>
                </button>
            </div>
        </div>
    </Flex>
);

export default Radium(Search);