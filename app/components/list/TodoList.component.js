import React from 'react';
import Todo from './Todo.component';
import store from '../../stores/todo.store';
import log from '../../utils/log.util';

import {
    ADD_TODO,
    TOGGLE_TODO_COMPLETE,
    TOGGLE_TODO_DELETE,
    SET_VISIBILITY_FILTER
} from '../../actions/actionTypes';

import {
    toggleTodoComplete,
    toggleTodoDelete
} from '../../actions';

function getVisibleTodos(todos, filter) {
    switch (filter) {
        case 'SHOW_ALL':
            return todos;
        case 'SHOW_COMPLETED':
            return todos.filter(todo=>todo.completed);
        case 'SHOW_ACTIVE':
            return todos.filter(todo=>!todo.completed&&!todo.deleted);
        default:
            return todos
    }
}

function onToggleTodoComplete(id) {
    // restrict toggle if item is deleted
    if (this.deleted) return;
    store.dispatch(toggleTodoComplete(id));
}

function onToggleTodoDelete(id) {
    store.dispatch(toggleTodoDelete(id));
}

export default class TodoList extends React.Component {
    constructor() {
        super();
        this.state = {
            todos: [],
            visibilityFilter: 'SHOW_ALL'
        }
        store.subscribe(
            [
                ADD_TODO,
                TOGGLE_TODO_COMPLETE,
                TOGGLE_TODO_DELETE,
                SET_VISIBILITY_FILTER
            ], (state) => {
                this.setState({
                    todos: state.todos,
                    visibilityFilter: state.visibilityFilter
                });
            });
    }
    render() {

        log.render('TODO LIST');

        const {todos, visibilityFilter} = this.state;

        let visibleTodos = getVisibleTodos(todos, visibilityFilter);

        // Move deleted todos to the bottom
        visibleTodos = visibleTodos
            .filter(todo=>!todo.deleted)
            .concat(visibleTodos.filter(todo=>todo.deleted));

        return (
                <ul>
                    {visibleTodos.map((todo, key) => {
                        console.log(todo);
                        return (
                            <Todo key={key}
                                {...todo}
                                onToggleTodoComplete={onToggleTodoComplete}
                                onToggleTodoDelete={onToggleTodoDelete}/>
                            )
                    })}
                </ul>
            )
    }
}
