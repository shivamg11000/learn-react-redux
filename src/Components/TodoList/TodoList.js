import React, { Component } from 'react';

import Todo from '../Todo/Todo';

class TodoList extends Component {
    render() {
        return (
            <div>
              {
                  this.props.todos.map(t => 
                    <Todo 
                      key={t.id}
                      {...t}
                      onClick={() => this.props.onTodoClick(t.id)}
                    />
                  )
              }  
            </div>
        );
    }
}

export default TodoList;