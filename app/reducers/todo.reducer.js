import {
    ADD_TODO,
    TOGGLE_TODO_COMPLETE,
    TOGGLE_TODO_DELETE
} from '../actions/actionTypes'
import log from '../utils/log.util'

function addTodo(state, action) {
    return [...state,
        {
            id: action.id,
            title: action.title,
            completed: false
        }
    ]
}

function toggleTodoComplete(state, action) {
    return state.map(todo => {
        if (todo.id !== action.id) {
            return todo;
        }
        return {
            ...todo,
            completed: !todo.completed
        }
    })
}

function toggleTodoDelete(state, action) {
    return state.map(todo => {
        if (todo.id !== action.id) {
            return todo;
        }
        return {
            ...todo,
            deleted: !todo.deleted
        }
    })
}


export default function todoReducer(state = [], action) {
    log.reduce(`TODO: ${action.type}`);

    switch (action.type) {
        case ADD_TODO:
            return addTodo(state, action);
        case TOGGLE_TODO_COMPLETE:
            return toggleTodoComplete(state, action);
        case TOGGLE_TODO_DELETE:
            return toggleTodoDelete(state, action);
        default:
            return state;
    }
}
