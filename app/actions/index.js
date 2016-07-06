import actiontypes from './actiontypes';
import {uniqueId} from 'lodash';

export function addTodo(title) {
    console.log('dispatch ADD_TODO');
    return {
        type: actiontypes.ADD_TODO,
        id: uniqueId(),
        title,
        completed: false
    }
}

export function toggleTodo(id) {
    console.log('dispatch TOGGLE_TODO');
    return {
        type: actiontypes.TOGGLE_TODO,
        id
    }
}
