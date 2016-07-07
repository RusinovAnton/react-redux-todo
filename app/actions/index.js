import {
    ADD_TODO,
    TOGGLE_TODO,
    DELETE_TODO,
    UNDELETE_TODO
} from './actionTypes';

import log from '../utils/log.util';

import {uniqueId} from 'lodash';

export function addTodo(title) {

    log.action('dispatch ADD_TODO');

    return {
        type: ADD_TODO,
        id: uniqueId(),
        title,
        completed: false
    }
}

export function toggleTodo(id) {

    log.action('dispatch TOGGLE_TODO');

    return {
        type: TOGGLE_TODO,
        id
    }
}

export function deleteTodo(id) {

    log.action('dispatch DELETE_TODO');

    return {
        type: DELETE_TODO,
        id
    }
}

export function undeleteTodo(id) {

    log.action('dispatch UNDELETE_TODO');

    return {
        type: UNDELETE_TODO,
        id
    }
}
