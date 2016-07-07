import {
    SET_VISIBILITY_FILTER
} from '../actions/actionTypes';

export default function filterTodoReducer(state = [], action) {
    console.log('Reduce filterTodo');
    switch (action.type) {
        case SET_VISIBILITY_FILTER:
            return action.filter;
        default:
            return state;
    }
}
