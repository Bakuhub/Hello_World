import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import React from 'react';
import { store, history} from './store';

import { Route, Switch } from 'react-router-dom';
import { ConnectedRouter } from 'react-router-redux';

import App from './components/App';

ReactDOM.render((
  <Provider store={store} style ={ {height:'100%'}}>
    <ConnectedRouter history={history} style ={ {height:'100%'}}>
      <Switch style ={ {height:'100%'}}>
        <Route path="/" component={App}  style ={ {height:'100%'}} />
      </Switch>
    </ConnectedRouter>
  </Provider>

), document.getElementById('root'));
