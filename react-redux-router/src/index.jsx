import React from 'react';
import ReactDOM from 'react-dom';

import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';

import createHistory from 'history/createBrowserHistory';
import { Route } from 'react-router';

import { ConnectedRouter } from 'react-router-redux';

import reducer from './reducer';

const history = createHistory();

const ENV = process.env.NODE_ENV || 'development';

import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';

let reduxMiddlewares = [thunkMiddleware];
if (ENV === 'development') {
  reduxMiddlewares.push(createLogger);
}

let store = createStore(
  reducer,
  applyMiddleware(...reduxMiddlewares)
);

function About() {
  return (
    <p>about page</p>
  );
}

class App extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>home page</div>
    );
  }
}

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <div>
        <Route exact path="/" component={App} />
        <Route path="/about" component={About} />
      </div>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('app')
);
