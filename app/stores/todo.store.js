import {combineReducers} from 'redux';
import todos from '../reducers/todo.reducer';
import visibilityFilter from '../reducers/visibilityFilter.reducer';
import Store from './Store';

export default new Store(combineReducers({
    todos,
    visibilityFilter
}));
