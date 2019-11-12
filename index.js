import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';
import Home from './components/Home'

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
        <Home />
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
