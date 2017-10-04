import React from 'react';
import Radium from 'radium';
import {common, blue500, blue700, grey200} from 'styles';

const style = {
    container: {
        paddingLeft: 40,
        paddingRight: 40,
        paddingTop: 20
    },
    install: {
        display: 'inline-block',
        padding: 5,
        backgroundColor: grey200,
        fontFamily: 'Consolas',
        fontWeight: 300
    },
    link: {
        color: blue500,
        ':hover': {
            textDecoration: 'underline',
            color: blue700
        }
    }
};

const Install = (props) => (
    <div style={style.container}>
        <h5 style={style.install}>
            hlpr install {props.name}
        </h5>
        <br/>
        <a
            href="#"
            style={style.link}
            target="_blank">
            need help? click here
        </a>
    </div>
);

export default Radium(Install);