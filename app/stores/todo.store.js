import {combineReducers} from 'redux';
import todo from '../reducers/todo.reducer';
import filterTodo from '../reducers/filterTodo.reducer';
import Store from './Store';

export default new Store(combineReducers({
    todo,
    filterTodo
}));
