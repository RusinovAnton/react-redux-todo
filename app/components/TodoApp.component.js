import React from 'react';

export default class TodoApp extends React.Component {
    render() {
        return (
            <div>
                <form onSubmit={this.props.onAddTodo.bind(this)}>
                    <input ref={ node => {this.input = node} } type="text"/>
                    <button type="submit">Add Todo</button>
                </form>
                <ul>
                    {this.props.todos.map(todo=> {
                        return (<li key={todo.id} onClick={this.props.onToggleTodo.bind(this, todo.id)}
                                    style={{textDecoration: todo.completed ? 'line-through' : 'none'}}>
                                {todo.title}
                            </li>
                        );
                    })}
                </ul>
            </div>
        )
    }
}
