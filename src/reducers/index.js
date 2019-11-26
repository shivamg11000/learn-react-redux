
import todos from "./todos";
import visibilityFilter from "./visibilityFilter";

import { combineReducers } from "redux";

const app = combineReducers({
    todos,
    visibilityFilter
})

export default app;