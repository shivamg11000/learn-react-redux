import React, { Component } from 'react';

import AddTodo from './Components/AddTodo/AddTodo';
import VisualTodoList from './Containers/VisualTodoList';
import FilterLinks from './Components/FilterLinks/FilterLinks';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>React-Redux todo</h1>
        <AddTodo />
        <VisualTodoList />
        <FilterLinks />
      </div>
    );
  }
}

export default App;
