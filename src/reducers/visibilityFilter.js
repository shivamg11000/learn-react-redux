import actionTypes from "../enums/actionTypes";
import filterTypes from "../enums/filterTypes";


const visibilityFilter = (state=filterTypes.SHOW_ALL, action) => {
    switch(action.type){
        case actionTypes.SET_VISIBILITY_FILTER:
            return action.filter;
        default:
            return state;
    }
}

export default visibilityFilter;