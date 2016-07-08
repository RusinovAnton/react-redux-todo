import {
    ADD_TODO,
    TOGGLE_TODO,
    DELETE_TODO,
    UNDELETE_TODO
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

function toggleTodo(state, action) {
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

function deleteTodo(state, action) {
    return state.map(todo => {
        if (todo.id !== action.id) {
            return todo;
        }
        return {
            ...todo,
            deleted: true
        }
    })
}

function undeleteTodo(state, action) {
    return state.map(todo => {
        if (todo.id !== action.id) {
            return todo;
        }
        return {
            ...todo,
            deleted: false
        }
    })
}

export default function todoReducer(state = [], action) {
    log.reduce(`TODO: ${action.type}`);

    switch (action.type) {
        case ADD_TODO:
            return addTodo(state, action);
        case TOGGLE_TODO:
            return toggleTodo(state, action);
        case DELETE_TODO:
            return deleteTodo(state, action);
        case UNDELETE_TODO:
            return undeleteTodo(state, action);
        default:
            return state;

    }
}
