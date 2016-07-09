import {
    ADD_TODO,
    TOGGLE_TODO_COMPLETE,
    TOGGLE_TODO_DELETE,
    SET_VISIBILITY_FILTER
} from './actionTypes';

import log from '../utils/log.util';

import {uniqueId} from 'lodash';

export function addTodo(title) {

    log.action('ADD_TODO');

    return {
        type: ADD_TODO,
        id: uniqueId(),
        title,
        completed: false
    }
}

export function toggleTodoComplete(id) {

    log.action('TOGGLE_TODO_COMPLETE');

    return {
        type: TOGGLE_TODO_COMPLETE,
        id
    }
}

export function toggleTodoDelete(id) {

    log.action('TOGGLE_TODO_DELETE');

    return {
        type: TOGGLE_TODO_DELETE,
        id
    }
}

export function filterTodo(filter) {

    log.action('SET_VISIBILITY_FILTER');

    return {
        type: SET_VISIBILITY_FILTER,
        filter
    }
}
