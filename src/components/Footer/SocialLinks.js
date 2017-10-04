import React from 'react';
import Radium from 'radium';
import FaGithub from 'react-icons/lib/fa/github';
import {blue100, white} from 'styles';

const style = {
    container: {
        padding: '5px 0'
    },
    link: {
        color: white,
        ':hover': {
            color: blue100
        }
    }
};

const SocialLinks = () => (
    <div style={style.container}>
        <a
            href="https://github.com/HalfLife-Plugin-Repository"
            style={style.link}
            target="_blank">
            <FaGithub size={24}/>
        </a>
    </div>
);

export default Radium(SocialLinks);