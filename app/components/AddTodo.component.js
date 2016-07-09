import React from 'react';
import store from '../stores/todo.store';
import {addTodo} from '../actions';
import log from '../utils/log.util';

export default class AddTodo extends React.Component {
    constructor() {
        super()
        this.onAddTodo = this.onAddTodo.bind(this);
    }

    onAddTodo(e) {
        // Prevent default submit
        e.preventDefault();

        // Do not dispatch if input is empty
        if (!this.input.value.replace('/\s/g', '').length) return;

        store.dispatch(addTodo(this.input.value));

        // Clear up input field after dispatch
        this.input.value = '';
    }

    render() {
        log.render('Add todo form');
        return (
                <form onSubmit={this.onAddTodo}>
                    <input ref={ node => {this.input = node} } type="text"/>
                    <button type="submit">Add Todo</button>
                </form>
            )
    }
}
