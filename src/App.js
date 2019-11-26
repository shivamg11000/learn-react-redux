import React, { Component } from 'react';
import TodoApp from "./Components/todoApp";
import { createStore } from "redux";
import { Provider } from "react-redux";

// reducer
import reducer from "./reducers";

// create store 
const store = createStore(reducer);

class App extends Component{
  render(){
    return (
      <div className="App">
        <Provider store={store}>
          <TodoApp/>
        </Provider>
      </div>  
    );
  }
}

export default App;
