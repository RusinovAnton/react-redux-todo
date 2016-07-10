import React from 'react';
import AddTodo from './AddTodo.component';
import TodoFilter from './filter/TodoFilter.component';
import TodoList from './list/TodoList.component';

export default class TodoApp extends React.Component {

    render() {
        return (
            <div>
                <AddTodo />
                <TodoFilter />
                <TodoList />
            </div>
        )
    }

}
