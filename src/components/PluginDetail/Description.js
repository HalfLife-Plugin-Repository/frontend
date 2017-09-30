import React from 'react';
import Radium, {Style} from 'radium';
import ReactMarkdown from 'react-markdown';
import {blue500, blue700, grey200, grey600, grey700} from 'styles';

const style = {
    container: {
        padding: '0 45px 45px 45px'
    }
};

const rules = {
    '*': {
        color: grey600
    },
    'h1, h2, h3, h4, h5, h6': {
        marginTop: 24,
        marginBottom: 16,
        color: grey700
    },
    'h1, h2': {
        borderBottom: `1px solid ${grey200}`,
        paddingBottom: '0.3em'
    },
    h1: {
        fontSize: '2em'
    },
    h2: {
        fontSize: '1.5em'
    },
    h3: {
        fontSize: '1.25em'
    },
    h4: {
        fontSize: '1em'
    },
    h5: {
        fontSize: '0.875em'
    },
    h6: {
        fontSize: '0.85em'
    },
    ul: {
        paddingLeft: '2em',
        marginTop: 0,
        marginBottom: 16
    },
    li: {
        fontWeight: 300
    },
    'li+li': {
        marginTop: '0.25em'
    },
    p: {
        marginBottom: 16
    },
    a: {
        color: blue500,
        ':hover': {
            color: blue700
        }
    }
};

const Description = (props) => (
    <div
        className="description"
        style={style.container}>
        <Style
            scopeSelector=".description"
            rules={rules}/>
        <ReactMarkdown
            escapeHtml={true}
            source={props.source}/>
    </div>
);

export default Description;