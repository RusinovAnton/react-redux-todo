import {
    ADD_TODO,
    TOGGLE_TODO,
    DELETE_TODO,
    UNDELETE_TODO
} from './actionTypes';

import {uniqueId} from 'lodash';

export function addTodo(title) {

    console.log('dispatch ADD_TODO');

    return {
        type: ADD_TODO,
        id: uniqueId(),
        title,
        completed: false
    }
}

export function toggleTodo(id) {

    console.log('dispatch TOGGLE_TODO');

    return {
        type: TOGGLE_TODO,
        id
    }
}

export function deleteTodo(id) {
    console.log('dispatch DELETE_TODO');

    return {
        type: DELETE_TODO,
        id
    }
}

export function undeleteTodo(id) {

    console.log('dispatch UNDELETE_TODO');

    return {
        type: UNDELETE_TODO,
        id
    }
}
