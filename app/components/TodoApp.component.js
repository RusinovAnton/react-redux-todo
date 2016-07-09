import React from 'react';
import TodoFilter from './filter/TodoFilter.component';

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

export default class TodoApp extends React.Component {
    constructor(props) {
        super(props);


    }

    // static propTypes = {
    //     state: React.PropTypes.object.isRequired,
    //     onAddTodo: React.PropTypes.func.isRequired,
    //     onToggleTodo: React.PropTypes.func.isRequired,
    //     onDeleteTodo: React.PropTypes.func.isRequired,
    //     onUndeleteTodo: React.PropTypes.func.isRequired
    // };

    render() {
        const {todos, visibilityFilter} = this.props.state;

        let visibleTodos = getVisibleTodos(todos, visibilityFilter);

        // Move deleted todos to the bottom
        visibleTodos = visibleTodos
            .filter(todo=>!todo.deleted)
            .concat(visibleTodos.filter(todo=>todo.deleted));

        return (
            <div>
                <form onSubmit={this.props.onAddTodo.bind(this)}>
                    <input ref={ node => {this.input = node} } type="text"/>
                    <button type="submit">Add Todo</button>
                </form>
                <TodoFilter />
                <ul>
                    {visibleTodos.map(todo => {
                        return (
                            <li key={todo.id}
                                className={`todo__item${todo.completed ? ' todo__item--completed' : ''}${todo.deleted ? ' todo__item--deleted' : ''}`}
                                style={{textDecoration: todo.completed ? 'line-through' : 'none'}}>
                                <span
                                    onClick={this.props.onToggleTodo.bind(todo)}>
                                    {todo.title}
                                </span>
                                {
                                    todo.deleted ?
                                        <button type="button" onClick={this.props.onUndeleteTodo.bind(todo)}>undelete</button> :
                                        <button type="button" onClick={this.props.onDeleteTodo.bind(todo)}>x</button>
                                }
                            </li>
                        );
                    })}
                </ul>
            </div>
        )
    }
}
