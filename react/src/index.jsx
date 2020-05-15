'use strict';

import React from 'react';
import { render } from 'react-dom';

class App extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {

  }

  render() {
    return (
      <div>
        hello world
      </div>
    );
  }
}

render(
  <App />,
  document.getElementById('app')
);
