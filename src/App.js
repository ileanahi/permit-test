import React, { Component } from 'react';
import './App.css';
import Question from './components/Question';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>
            Permit Test Questions
          </p>
        </header>
        <Question content="Yes or no?" />
      </div>
    );
  }
}

export default App;
