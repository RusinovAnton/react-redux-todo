import React from 'react';
import FilterLink from './FilterLink.component';
import {filterTodo} from '../../actions';
import store from '../../stores/todo.store.js';
import log from '../../utils/log.util';

const FILTER_VALUES = [
    {
        value: 'SHOW_ALL',
        title: 'All'
    },
    {
        value: 'SHOW_ACTIVE',
        title: 'Active'
    },
    {
        value: 'SHOW_COMPLETED',
        title: 'Completed'
    }
];

export default class TodoFilter extends React.Component {
    constructor() {
        super();

        this.state = {
            filter: 'SHOW_ALL'
        }

        store.subscribe(['SET_VISIBILITY_FILTER'], ()=>{
            this.setState({filter: store.state.visibilityFilter})
            console.log(this.state);
        });
    }

    filterTodo(filter = 'SHOW_ALL') {
        store.dispatch(filterTodo(filter))
    }

    render() {
        log.render('Filters');
        return (
            <p>
                {
                    FILTER_VALUES.map((fltr, key)=>{
                        console.log(this);
                        return (
                            <FilterLink
                                key={key}
                                isActive={this.state.filter === fltr.value}
                                filter={fltr.value}
                                onFilterClick={this.filterTodo}>
                                {fltr.title}
                            </FilterLink>
                        );
                    })
                }
            </p>
        );
    }
}
