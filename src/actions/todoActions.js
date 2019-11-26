
import actions from '../enums/actionTypes';

const addTodo = (text) => ({
    type: actions.ADD_TODO,
    text
})

const deleteTodo = (id) => ({
    type: actions.DELETE_TODO,
    id
})

const toggleTodo = (id) => ({
    type: actions.TOGGLE_TODO,
    id
})

export default {
    addTodo,
    deleteTodo,
    toggleTodo
}