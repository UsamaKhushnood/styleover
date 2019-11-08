import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'styleover'
    };
  }

  render() {
    return (
      <div className="mainContainer" role="section">
        <div className="mainLogo" id="logo"></div>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
