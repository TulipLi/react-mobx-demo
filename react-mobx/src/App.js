import React, { Component } from 'react';
import './App.css';


class App extends Component {
  render() {
    return (
      <div className="App">
        todoList的lenth是{this.props.todoList.length}
      </div>
    );
  }
}

export default App;
