import {
    SET_VISIBILITY_FILTER
} from '../actions/actionTypes';
import log from '../utils/log.util'

export default function filterTodoReducer(state = 'SHOW_ALL', action) {
    log.reduce('Reduce filterTodo');
    switch (action.type) {
        case SET_VISIBILITY_FILTER:
            return action.filter;
        default:
            return state;
    }
}
