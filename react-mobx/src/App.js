import React, { Component } from 'react';
import './App.css';
import { observer } from 'mobx-react';

@observer
class App extends Component {
  render() {
    return (
      <div className="App">
        todoList的length是{this.props.todoList.length}
      </div>
    );
  }
}

export default App;
