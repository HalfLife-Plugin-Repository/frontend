import React, {Component} from 'react';
import {connect} from 'react-redux';
import {verifyToken} from 'actions/auth';
import {Style, StyleRoot} from 'radium';
import Footer from './Footer';
import Header from './Header';
import root from 'styles';

const authRoutes = ['/login', '/register', '/forgot-password'];

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
        const notAuthRoute = authRoutes.indexOf(pathname) === -1;
        return (
            <StyleRoot>
                <div>
                    <Style rules={root}/>
                    {notAuthRoute &&
                    <Header opaque={pathname !== '/'}/>
                    }
                    {children}
                    {notAuthRoute &&
                    <Footer/>
                    }
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