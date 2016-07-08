import store from './stores/todo.store';
import log from './utils/log.util';
import {render as ReactRender} from 'react-dom';
import TodoApp from './components/TodoApp.component';
import * as actions from './actions';
import React from 'react';

function render() {

    log.render('APP', true);
    console.log(store.state);

    function onAddTodo(e) {
        // Prevent default submit
        e.preventDefault();

        // Do not dispatch if input is empty
        if (!this.input.value.replace('/\s/g', '').length) return;

        store.dispatch(actions.addTodo(this.input.value));

        // Clear up input field after dispatch
        this.input.value = '';
    }

    function onToggleTodo() {
        // restrict toggle if item is deleted
        if (this.deleted) return;
        store.dispatch(actions.toggleTodo(this.id));
    }

    function onDeleteTodo() {
        store.dispatch(actions.deleteTodo(this.id));
    }

    function onUndeleteTodo() {
        store.dispatch(actions.undeleteTodo(this.id));
    }

    function onFilter(filter) {
        store.dispatch(actions.filterTodo(filter))
    }

    ReactRender(
        <TodoApp
            state={{...store.state}}
            onAddTodo={onAddTodo}
            onToggleTodo={onToggleTodo}
            onDeleteTodo={onDeleteTodo}
            onUndeleteTodo={onUndeleteTodo}
            onFilter={onFilter}
        />,
        document.getElementById('root')
    )
}

store.subscribe(null, render);

render();
