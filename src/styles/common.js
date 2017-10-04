/**
 * @file Shared Styles
 */

import * as colors from './colors';

const common = {
    content:{
        position: 'relative',
        minHeight: 'inherit',
        padding: '0 15px',
        boxSizing: 'border-box',
        width: '100%',
        '@media(min-width: 1000px)':{
            width: 960
        }
    },
    container: {
        position: 'relative',
        width: '100%',
        minHeight: 'calc(100vh - 97px)',
        height: 'auto',
        backgroundColor: colors.grey100,
        paddingBottom: 40
    },
    alignCenter: {
        margin: '0 auto'
    },
    hGradient: {
        backgroundImage: `linear-gradient(to right, ${colors.blue500}, ${colors.blue700})`
    },
    vGradient: {
        backgroundImage: `linear-gradient(to bottom, ${colors.blue500}, ${colors.blue700})`
    },
    white: {
        color: colors.white
    },
    blue500: {
        color: colors.blue500,
    },
    grey500: {
        color: colors.grey500
    },
    grey600: {
        color: colors.grey600
    },
    grey700:{
        color: colors.grey700
    },
    grey900: {
        color: colors.grey900
    },
    amOrange: {
        color: colors.amOrange
    },
    smBlue: {
        color: colors.smBlue
    },
    mmRed: {
        color: colors.mmRed
    },
    center: {
        textAlign: 'center'
    },
    light: {
        fontWeight: 300
    },
    regular: {
        fontWeight: 400
    },
    strong: {
        fontWeight: 700
    },
    noTextDecoration: {
        textDecoration: 'none'
    },
    borderBox: {
        boxSizing: 'border-box'
    },
    inline: {
        display: 'inline'
    },
    inlineBlock: {
        display: 'inline-block'
    },
    block: {
        display: 'block'
    },
    form: {
        padding: '0 40px'
    },
    formActions: {
        marginTop: 20
    }
};

export default common;