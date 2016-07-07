import React from 'react';



export default class TodoApp extends React.Component {
    constructor(props) {
        super(props);
    }

    static propTypes = {
        todos: React.PropTypes.array.isRequired,
        onAddTodo: React.PropTypes.func.isRequired,
        onToggleTodo: React.PropTypes.func.isRequired,
        onDeleteTodo: React.PropTypes.func.isRequired,
        onUndeleteTodo: React.PropTypes.func.isRequired
    };

    render() {
        return (
            <div>
                <form onSubmit={this.props.onAddTodo.bind(this)}>
                    <input ref={ node => {this.input = node} } type="text"/>
                    <button type="submit">Add Todo</button>
                </form>
                <ul>
                    {this.props.todos.map(todo => {
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
