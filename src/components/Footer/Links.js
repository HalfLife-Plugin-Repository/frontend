import React from 'react';
import Radium from 'radium';
import {white, blue100} from 'styles';

const style = {
    link: {
        color: white,
        ':hover': {
            color: blue100
        },
        fontWeight: 300
    },
    midDot: {
        margin: '0 5px',
        color: white,
        fontSize: '1em'
    }
};

const links = [
    {
        link: '#',
        name: 'About'
    },
    {
        link: '#',
        name: 'Docs'
    },
    {
        link: '#',
        name: 'Privacy & Terms'
    }
];

const Links = () => (
    <div>
        {links.map((link, index) =>
        <span>
            <a
                href={link.link}
                key={index}
                style={style.link}>
                {link.name}
            </a>
            {index < links.length - 1 &&
            <span style={style.midDot}>&middot;</span>
            }
        </span>
        )}
    </div>
);

export default Radium(Links);