import React, { Component } from "react";
import { connect } from "react-redux";

// actions
import filterTypes from "../enums/filterTypes";
import todoActions from "../actions/todoActions";
import filterActions from "../actions/filterActions";

// Components
import Filter from "./filters"; 
import Input from "./input";
import Todo from "./todo";

// filter todos by filter
const getVisibleTodos = (todos, filter) => {
    switch(filter){
        case filterTypes.SHOW_ALL:
          return todos;
        case filterTypes.SHOW_ACTIVE:
          return todos.filter(t => !t.completed);
        case filterTypes.SHOW_COMPLETED:
          return todos.filter(t => t.completed);
        default:
          return todos;    
    }
};

class TodoApp extends Component{
    render(){
        console.log(this.props);
        return(
            <div>
                <h1>Todo App</h1>
                <Input addTodo={this.props.addTodo}/>
                <Todo 
                    todos={this.props.todos}
                    todoClick={this.props.todoClick}
                    todoRemove={this.props.todoRemove}
                    />
                <Filter setFilter={this.props.setFilter}/>
            </div>
        );
    }
};

// store state is mapped to props of TodoApp component
const mapStateToProps = (state) => ({
    todos: getVisibleTodos(state.todos, state.visibilityFilter)
}); 

// actions are mapped to props of TodoApp component
const mapDispatchToProps = (dispatch) => ({
    todoClick: (id) => dispatch(todoActions.toggleTodo(id)),
    todoRemove: (id) => dispatch(todoActions.deleteTodo(id)),
    addTodo: (text) => dispatch(todoActions.addTodo(text)),
    setFilter: (filter) => dispatch(filterActions.setVisibilityFilter(filter))
});

// connect TodoApp component to redux store
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoApp);