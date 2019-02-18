import React, { Component } from 'react';
import './App.css';
import Question from './components/Question';

class App extends Component {
  constructor(props) {
    super(props);
      this.state = {
      counter: 0,
      questionId: 1,
      question: '',
      answerOptions: [],
      answer: '',
      answersCount: {
        correct: 0,
        wrong: 0
      },
      result: ''
    };
  }
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
