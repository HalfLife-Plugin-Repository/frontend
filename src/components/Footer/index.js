import React from 'react';
import FaHeart from 'react-icons/lib/fa/heart';
import Links from './Links';
import SocialLinks from './SocialLinks';
import {common, blue500} from 'styles';

import Logo from 'img/logo-horiz.png';

const style = {
    container: {
        backgroundColor: blue500,
        minHeight: 125
    },
    content: {
        padding: 35,
        textAlign: 'center'
    },
    heart: {
        color: '#E91E63'
    },
    logo: {
        height: 50,
        width: 'auto',
        marginBottom: 15
    }
};


const Footer = () => (
    <footer
        style={style.container}>
        <div
            style={style.content}>
            <img
                alt="Logo"
                src={Logo}
                style={style.logo}/>
            <h5 style={common.white}>
                Made with <FaHeart style={style.heart}/> for AlliedModders
            </h5>
            <SocialLinks/>
            <Links/>
        </div>
    </footer>
);

export default Footer;