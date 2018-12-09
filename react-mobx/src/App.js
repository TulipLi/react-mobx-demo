import React, { Component } from 'react';
import './App.css';
import { observer } from 'mobx-react';

@observer
class App extends Component {
  render() {
    return (
      <div className="App">
        <div>
          <p>todoList的length是{this.props.todoList.todos.length}</p>
          <p>todoList的task的id 总和 是{this.props.todoList.allIdCount}</p>
        </div>
        <button onClick={() => this.props.todoList.push()}>点我添加</button>
      </div>
    );
  }
}

export default App;
