import actionTypes from "../enums/actionTypes";
const { ADD_TODO, DELETE_TODO, TOGGLE_TODO } = actionTypes;

const init = [
    {id: 1, text: 'Let understand react-redux better', completed: false }
];
let count = init.length;


const todos = (state=init, action) => {
    switch(action.type){
        case ADD_TODO:
            const todo = {
                id: ++count,
                text: action.text,
                completed: false
            };
            return [...state, todo];
        case DELETE_TODO:
            return state.filter(t => t.id!==action.id);
        case TOGGLE_TODO:
            return state.map(t => 
                t.id===action.id ? 
                    {...t, completed: !t.completed} :
                    t
            );
        default:
            return state;
    }
}

export default todos;