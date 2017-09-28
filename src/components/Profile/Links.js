import React from 'react';
import FaGithub from 'react-icons/lib/fa/github';
import FaTwitter from 'react-icons/lib/fa/twitter';
import {AlliedModders} from 'components/Icons';
import {common, amBlue, github, twitter} from 'styles';

const style = {
    container: {
        position: 'absolute',
        bottom: 20,
        right: 20,
        paddingBottom: '0.33em'
    },
    link: {
        marginLeft: 7.5
    },
    github: {
        color: github
    },
    twitter: {
        color: twitter
    },
    alliedModders: {
        color: amBlue
    }
};

const Links = (props) => (
    <div style={style.container}>
        {props.alliedmodders &&
        <a
            href={`https://forums.alliedmods.net/member.php?u=${props.alliedmodders}`}
            style={style.link}
            target="_blank">
            <AlliedModders style={style.alliedModders} size={24}/>
        </a>
        }
        {props.github &&
        <a
            href={`https://github.com/${props.github}`}
            style={style.link}
            target="_blank">
            <FaGithub style={style.github} size={24}/>
        </a>
        }
        {props.twitter &&
        <a
            href={`https://twitter.com/${props.twitter}`}
            style={style.link}
            target="_blank"
        >
            <FaTwitter style={style.twitter} size={24}/>
        </a>
        }
    </div>
);

export default Links;