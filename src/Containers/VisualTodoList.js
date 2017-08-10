import { connect } from 'react-redux';
import TodoList from '../Components/TodoList/TodoList';
import { toggleTodo } from '../actions/todoActions'

const mapStateToProps = state => ({
    todos: state.todos
})


/*
shorthand notaion of
const mapDispatchToProps = dispatch => ({
    onTodoClick : (id) => dispatch(toggleTodo(id)) 
})
*/
const mapDispatchToProps = {
    onTodoClick: toggleTodo
}


// Container component which is connected to the store's state and 
// has certain callback functions for event handlers which are passed as props to its presentational component
const VisualTodoList = connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoList) 

export default VisualTodoList;