import store from './stores/todo.store';

import {render as ReactRender} from 'react-dom';
import TodoApp from './components/TodoApp.component';
import * as actions from './actions';
import React from 'react';


function render() {
    console.log(store.getState());
    function onAddTodo(e) {
        e.preventDefault();
        if (!this.input.value) return;
        store.dispatch(actions.addTodo(this.input.value));
        this.input.value = '';
    }

    function onToggleTodo(id) {
        store.dispatch(actions.toggleTodo(id));
    }

    ReactRender(
        < TodoApp
            onAddTodo={onAddTodo}
            onToggleTodo={onToggleTodo}
            todos={store.getState().todo}
        />,
        document.getElementById('root')
    )
}

store.subscribe(render);
render();
