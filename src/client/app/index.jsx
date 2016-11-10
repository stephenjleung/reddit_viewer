// npm run build runs Webpack in production mode, 
// which minimizes the bundle file automatically, 
// and the command npm run dev runs the Webpack 
// in the watch mode.

// npm run dev

import React from 'react';
import {render} from 'react-dom';
import TestComponent from './TestComponent.jsx';

class App extends React.Component {
  render () {
    return (
      <div>
        <p> Hello React! From index.jsx </p>
        <TestComponent />
      </div>
    );
  }
}

render(<App/>, document.getElementById('app'));