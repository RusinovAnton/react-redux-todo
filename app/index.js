import React from 'react';
import {render as ReactRender} from 'react-dom';
import TodoApp from './components/TodoApp.component';

ReactRender(
    <TodoApp />,
    document.getElementById('root')
);
