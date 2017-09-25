/**
 * Root Style
 */

const rootStyle = {
    body: {
        margin: 0
    },
    "*": {
        fontFamily: 'Roboto, sans-serif'
    },
    'h1, h2, h3, h4, h5': {
        fontFamily: 'Raleway, sans-serif'
    },
    'h1, h2, h3': {
        margin: '0 0 .5em 0'
    },
    'h4, h5': {
        margin: '0 0 .33em 0'
    },
    h1: {
        fontSize: '2em',
    },
    h2: {
        fontSize: '1.625em',
        lineHeight: 1.15384615,
    },
    h3: {
        fontSize: '1.375em',
        lineHeight: 1.13636364
    },
    h4: {
        fontSize: '1.2em',
        lineHeight: 1.11111111
    },
    h5: {
        fontSize: '1em'
    },
    p: {
        margin: '0 0 0.33em 0',
        fontWeight: 300
    },
    ul: {
        margin: 0,
        padding: 0
    },
    a: {
        textDecoration: 'none'
    },
    mediaQueries: {
        '(min-width: 43.75em)': {
            h1: {
                fontSize: '2.5em',
                lineHeight: 1.125
            },
            h2: {
                fontSize: '2em',
                lineHeight: 1.25
            },
            h3: {
                fontSize: '1.5em',
                lineHeight: 1.25
            },
            h4: {
                lineHeight: 1.22222222
            }
        },
        '(min-width: 56.25em)': {
            h1: {
                fontSize: '3em',
                lineHeight: 1.05
            },
            h2: {
                fontSize: '2.25em',
                lineHeight: 1.25
            },
            h3: {
                fontSize: '1.75em',
                lineHeight: 1.25
            }
        }
    }
};

export default rootStyle;