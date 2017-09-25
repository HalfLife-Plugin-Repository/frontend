import React, {Component} from 'react';
import {connect} from 'react-redux';
import {verifyToken} from 'actions/auth';
import {Style, StyleRoot} from 'radium';
import Header from './Header';
import root from 'styles';

class App extends Component {
    componentWillMount(){
        this.props.verifyToken();
    }

    render(){
        const {
            children,
            location: {
                pathname
            }
        } = this.props;
        return (
            <StyleRoot>
                <div>
                    <Style rules={root}/>
                    {['/login', '/register', '/forgot-password'].indexOf(pathname) === -1 &&
                    <Header opaque={pathname !== '/'}/>
                    }
                    {children}
                </div>
            </StyleRoot>
        );
    }
}

const mapStateToProps = () => {
    return {};
};

const mapDispatchToProps = (dispatch) => {
    return {
        verifyToken: () => {
            const token = localStorage.getItem('token');
            if(!token){
                return null;
            }
            return dispatch(verifyToken(token));
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(App);