import React from 'react';

export default class Todo extends React.Component {
    constructor(props) {
        super(props);
    }
    render () {

        const {
            id,
            title,
            completed,
            deleted,
            onToggleTodoComplete,
            onToggleTodoDelete
        } = this.props;

        return (
            <li className={`todo__item${completed ? ' todo__item--completed' : ''}${deleted ? ' todo__item--deleted' : ''}`}>
                <span onClick={onToggleTodoComplete.bind(this, id)}>{title}</span>
                {
                    deleted ?
                        <button type="button" onClick={onToggleTodoDelete.bind(this, id)}>undelete</button> :
                        <button type="button" onClick={onToggleTodoDelete.bind(this, id)}>x</button>
                }
            </li>
            )
    }
}
