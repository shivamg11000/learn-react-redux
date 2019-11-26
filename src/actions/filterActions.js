import actionTypes from "../enums/actionTypes";

export const setVisibilityFilter = (filter) => ({
    type: actionTypes.SET_VISIBILITY_FILTER,
    filter
})

export default {
    setVisibilityFilter
};