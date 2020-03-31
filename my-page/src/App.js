import React, { Component } from 'react';
import Avatar from './avatar.js'
import github from './github.js'
import './App.css';

class App extends Component {
  
  render() {
    return (
      <div className="App">
        <div className="App-header">
        </div>
        <Avatar/>
        <p className="App-intro">
          {github}
        </p>

      </div>
    );
  }
}

export default App;
