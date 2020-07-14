import React from 'react';
import ReactDOM from 'react-dom';

import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';

import createHistory from 'history/createBrowserHistory';
import { Link, Route } from 'react-router-dom';

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
    <div>
      <div>
        <Link to="/">home</Link>
        <br />
        <Link to="/about">about</Link>
      </div>
      <h1>about page</h1>
    </div>
  );
}

class App extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div>
          <Link to="/">home</Link>
          <br />
          <Link to="/about">about</Link>
        </div>
        <h1>home page</h1>
      </div>
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
