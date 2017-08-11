import { connect } from 'react-redux';
import TodoList from '../Components/TodoList/TodoList';
import { toggleTodo, deleteTodo } from '../actions/todoActions'

//filter todos on the basis of filter type
const getVisibleTodos = (todos,filter) => {
  switch(filter){
      case "SHOW_ALL":
        return todos
      case "SHOW_ACTIVE":
        return todos.filter(t => !t.completed)
      case "SHOW_COMPLETED":
        return todos.filter(t => t.completed)
      default:
        return todos    

  }
}

const mapStateToProps = state => ({
    todos: getVisibleTodos(state.todos, state.visibilityFilter)
})

/*
shorthand notaion of
const mapDispatchToProps = dispatch => ({
    onTodoClick : (id) => dispatch(toggleTodo(id)) 
})
*/
const mapDispatchToProps = {
  onTodoClick : toggleTodo,
  onRemove : deleteTodo
}


// Container component which is connected to the store's state and 
// has certain callback functions for event handlers which are passed as props to its presentational component
const VisualTodoList = connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoList) 

export default VisualTodoList;