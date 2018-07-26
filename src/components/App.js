import agent from '../agent';
import React from 'react';
import {connect} from 'react-redux';
import {APP_LOAD, REDIRECT} from '../constants/actionTypes';
import {Route, Switch} from 'react-router-dom';
import Article from '../components/Article';
import Editor from '../components/Editor';
import Home from '../components/Home';
import Login from '../components/Login';
import Profile from '../components/Profile';
import ProfileFavorites from '../components/ProfileFavorites';
import Register from '../components/Register';
import Settings from '../components/Settings';
import {store} from '../store';
import {push} from 'react-router-redux';
import EnhancedTable from './test'
import {Grid} from '@material-ui/core'
import PermanentDrawer from './Layout/SideBar'
import '../constants/App.css'
import '../constants/icon/Icon.css'
import Layout from './Widget/Menu'
import Header from './Layout/Header'

const mapStateToProps = state => {
    return {
        appLoaded: state.common.appLoaded,
        appName: state.common.appName,
        currentUser: state.common.currentUser,
        redirectTo: state.common.redirectTo
    }
};

const mapDispatchToProps = dispatch => ({
    onLoad: (payload, token) =>
        dispatch({type: APP_LOAD, payload, token, skipTracking: true}),
    onRedirect: () =>
        dispatch({type: REDIRECT})
});

class App extends React.Component {
    componentWillReceiveProps(nextProps) {
        if (nextProps.redirectTo) {
            // this.context.router.replace(nextProps.redirectTo);
            store.dispatch(push(nextProps.redirectTo));
            this.props.onRedirect();
        }
    }

    componentWillMount() {
        const token = window.localStorage.getItem('jwt');
        if (token) {
            agent.setToken(token);
        }

        this.props.onLoad(token ? agent.Auth.current() : null, token);
    }

    render() {
        if (this.props.appLoaded) {
            return (
                <Grid container
spacing={0}

                >
                    <Grid item sm ={2}>
                        <PermanentDrawer currentUser={this.props.currentUser}/>
                    </Grid>
                    <Grid item>
                        <Grid container direction={'column'} alignItems={'stretch'}>
                            <Grid item >
                        <Header
                            appName={this.props.appName}
                            currentUser={this.props.currentUser}/>
                            </Grid>
                            <Grid item>
                                <div> testing</div>
                        <Switch>
                            <Route exact path="/" component={Home}/>
                            <Route path="/login" component={Login}/>
                            <Route path="/register" component={Register}/>
                            <Route path="/editor/:slug" component={Editor}/>
                            <Route path="/editor" component={Editor}/>
                            <Route path="/article/:id" component={Article}/>
                            <Route path="/settings" component={Settings}/>
                            <Route path="/@:username/favorites" component={ProfileFavorites}/>
                            <Route path="/@:username" component={Profile}/>
                            <Route path='/test' component={EnhancedTable}/>
                            <Route path = '/pp' component={Layout}/>
                        </Switch>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>

            );
        }
        return (
            <div>

            </div>
        );
    }
}

// App.contextTypes = {
//   router: PropTypes.object.isRequired
// };

export default connect(mapStateToProps, mapDispatchToProps)(App);