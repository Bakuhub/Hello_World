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
import EnhancedTable from './Product/Overview'
import ProductOverview from './Product/Overview'
import PermanentDrawer from './Layout/SideBar'
import '../constants/App.css'
import '../constants/icon/Icon.css'
import Header from './Layout/Header'
import ProductEdit from './Product/Edit'
import VariantProduct from './Product/Variant'
import FeedsOverview from './Feeds/Overview'
import FeedsEdit from './Feeds/Edit'
import SectionEdit from './Feeds/Variant'
const mapStateToProps = state => {
    return {
        appLoaded: state.common.appLoaded,
        appName: state.common.appName,
        currentUser: state.common.currentUser,
        redirectTo: state.common.redirectTo,
        gg:'gjg'
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
                <div className="section-container" style={{height: '100%'}}>

                    <div className="section-a" style={{height: '100%'}}>

                        <div className="sample-div" style={{height: '100%'}}>
                            <PermanentDrawer currentUser={this.props.currentUser}/>

                        </div>

                    </div>

                    <div className="section-b" style={{height: '100%'}}>
                        <div className="navigation">

                            <Header
                                appName={this.props.appName}
                                currentUser={this.props.currentUser} style={{height: '100%'}}/>
                        </div>
                        <div className="content">
                            <Switch style={{height: '100%', width: '100%'}}>
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




                                <Route exact path='/feeds' component={FeedsOverview}/>
                                <Route exact path='/feeds/:blog' component={FeedsEdit}/>
                                <Route exact path='/feeds/:blog/:section' component={SectionEdit}/>




                                <Route exact path='/products' component={ProductOverview}/>
                                <Route exact path='/products/:id' component={ProductEdit}/>
                                <Route exact path='/products/:id/:type' component={VariantProduct}/>
                            </Switch>
                        </div>
                    </div>
                </div>


            );
        }
        return (
            <div>
                gg
            </div>
        );
    }
}

// App.contextTypes = {
//   router: PropTypes.object.isRequired
// };

export default connect(mapStateToProps, mapDispatchToProps)(App);
