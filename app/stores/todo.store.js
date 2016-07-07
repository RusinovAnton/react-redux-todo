import {createStore, combineReducers} from 'redux';
import todo from '../reducers/todo.reducer';
import filterTodo from '../reducers/filterTodo.reducer';

const todoAppReducer = combineReducers({
    todo,
    filterTodo
});

export default createStore(todoAppReducer);
