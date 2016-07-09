import {
    SET_VISIBILITY_FILTER
} from '../actions/actionTypes';
import log from '../utils/log.util'

export default function visibilityFilter(state = 'SHOW_ALL', action) {

    log.reduce(`FILTER: ${action.type}`);

    switch (action.type) {
        case SET_VISIBILITY_FILTER:
            return action.filter;
        default:
            return state;
    }
}
