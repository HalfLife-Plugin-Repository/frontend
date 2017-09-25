/**
 * @file Shared Animations
 */

import Radium from 'radium';

const fadeInDown = Radium.keyframes({
    '0%':{
        transform: 'translateY(-20px)',
        opacity: 0
    },
    '100%':{
        transform: 'translateY(0)',
        opacity: 1
    }
}, 'fadeInDown');

const fadeInUp = Radium.keyframes({
    '0%':{
        transform: 'translateY(20px)',
        opacity: 0
    },
    '100%':{
        transform: 'translateY(0)',
        opacity: 1
    }
}, 'fadeInUp');

const rotate = Radium.keyframes({
    '0%':{
        transform: 'rotate(0deg)'
    },
    '100%': {
        transform: 'rotate(359deg)'
    }
}, 'rotate');

const animations = {
    fadeInDown: {
        animation: 'x 1s ease forwards',
        animationName: fadeInDown,

    },
    fadeInUp: {
        animation: 'x 1s ease forwards',
        animationName: fadeInUp,
    },
    rotate: {
        animation: 'x 0.5s linear infinite',
        animationName: rotate
    }
};

export default animations;