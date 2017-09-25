import React, {Component} from 'react';
import {connect} from 'react-redux';
import {logIn} from '../../actions/auth';
import Button from 'components/Button';
import CheckBox from 'components/CheckBox';
import Container from 'components/Container';
import Divider from 'components/Divider';
import Flex from 'components/Flex';
import StyledLink from 'components/StyledLink';
import TextField from 'components/TextField';
import HelpMessage from './HelpMessage';
import {animations, common} from 'styles';

const style = {
    container:{
        width: 450
    },
    divider:{
        marginTop: 20
    },
    link: {
        marginTop: 20,
        display: 'inline-block'
    }
};

class Login extends Component {
    constructor(props){
        super(props);
        this.state = {
            username: '',
            password: '',
            rememberMe: false
        };
    }

    logIn = () => {
        this.props.logIn(this.state);
    };

    handleChange = (name, value) => {
        this.setState({
            [name]: value
        });
    };

    render(){
        const {
            username,
            password,
            rememberMe
        } = this.state;
        return (
            <div>
                <Container
                    header="Login"
                    style={style.container}>
                    <div style={common.form}>
                        <TextField
                            label="Username"
                            name="username"
                            onChange={this.handleChange}
                            value={username}/>
                        <TextField
                            label="Password"
                            name="password"
                            onChange={this.handleChange}
                            type="password"
                            value={password}/>
                        <Flex
                            align="center"
                            justify="space-between"
                            style={common.formActions}>
                            <CheckBox
                                checked={rememberMe}
                                label="Remember Me"
                                name="rememberMe"
                                onChange={this.handleChange}/>
                            <Button
                                label="Login"
                                onClick={this.logIn}/>
                        </Flex>
                        <Divider style={style.divider}/>
                        <StyledLink
                            to="/forgot-password"
                            style={[
                                common.grey500,
                                style.link
                            ]}>
                            Forgot Password?
                        </StyledLink>
                    </div>
                </Container>
                <HelpMessage
                    action="Register Now"
                    actionTo="/register"
                    question="Don't have an account?"/>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        isAuthenticating: state.auth.isAuthenticating
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        logIn: (creds) => dispatch(logIn(creds))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
