import {
    ADD_TODO,
    TOGGLE_TODO,
    DELETE_TODO,
    UNDELETE_TODO,
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

export function toggleTodo(id) {

    log.action('TOGGLE_TODO');

    return {
        type: TOGGLE_TODO,
        id
    }
}

export function deleteTodo(id) {

    log.action('DELETE_TODO');

    return {
        type: DELETE_TODO,
        id
    }
}

export function undeleteTodo(id) {

    log.action('UNDELETE_TODO');

    return {
        type: UNDELETE_TODO,
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
