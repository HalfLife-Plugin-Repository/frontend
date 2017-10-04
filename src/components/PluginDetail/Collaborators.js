import React from 'react';
import Radium from 'radium';
import Avatar from 'components/Avatar';
import Flex from 'components/Flex';
import StyledLink from 'components/StyledLink';
import {common, grey600, grey700, grey900} from 'styles';

const style = {
    avatar: {
        marginBottom: 10
    },
    content: {
        paddingTop: 20
    },
    collab: {
        flexBasis: '50%',
        textAlign: 'center',
        paddingBottom: 10
    },
    empty: {
        paddingLeft: 40,
        color: grey600
    },
    username: {
        color: grey700,
        fontFamily: 'inherit',
        ':hover': {
            color: grey900
        }
    }
};

const Collaborators = (props) => {
    let content = null;
    if(props.collaborators.length){
        content = (
            <Flex wrap={true}>
                {props.collaborators.map((c, index) => (
                    <div
                        key={index}
                        style={style.collab}>
                        <Avatar
                            circular={false}
                            size={45}
                            src={`${c.avatar}?d=retro&s=45`}
                            style={style.avatar}/>
                        <h5>
                            <StyledLink
                                style={style.username}
                                to={`/user/${c.id}`}>
                                {c.username}
                            </StyledLink>
                        </h5>
                    </div>
                ))}
            </Flex>
        );
    } else {
        content = (
            <h5 style={style.empty}>
                No Collaborators
            </h5>
        );
    }
    return (
        <div style={style.content}>
            {content}
        </div>
    )
};

export default Radium(Collaborators);