import {createStore, combineReducers} from 'redux';
import todo from '../reducers/todo.reducer';
import filterTodo from '../reducers/filterTodo.reducer';

export default createStore(combineReducers({
    todo,
    filterTodo
}));
