import {createStore, combineReducers} from 'redux';
import todo from '../reducers/todo.reducer';
import filterTodo from '../reducers/filterTodo.reducer';


function onAddTodo(e) {
    e.preventDefault();
    if (!this.input.value) return;
    store.dispatch(actions.addTodo(this.input.value));
    this.input.value = '';
}

function onToggleTodo(id) {
    store.dispatch(actions.toggleTodo(id));
}

const todoAppReducer = combineReducers({
    todo,
    filterTodo
});

export default createStore(todoAppReducer);
