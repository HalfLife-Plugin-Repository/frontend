import React from 'react';
import {grey200} from 'styles';

const style = {
    install: {
        marginTop: 20,
        marginLeft: 40,
        display: 'inline-block',
        padding: 5,
        backgroundColor: grey200,
        fontFamily: 'Consolas',
        fontWeight: 300
    }
};

const Install = (props) => (
    <div>
        <h5 style={style.install}>
            hlpr install {props.name}
        </h5>
    </div>
);

export default Install;