import React from 'react';
import {
    Router,
    Route,
    IndexRoute,
    hashHistory
} from 'react-router';

import TodoApp from '../components/TodoApp.component';
import TodoAppHome from '../components/TodoAppHome.component';
import TodoTrash from '../components/TodoTrash.component';

const routes = (
    <Router history={hashHistory}>
        <Route path="/" component={ TodoApp }>
            <IndexRoute component={ TodoAppHome } />
            <Route path="/trash" component={ TodoTrash }/>
        </Route>
    </Router>
);

export default routes;
