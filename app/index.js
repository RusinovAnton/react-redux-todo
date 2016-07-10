import React from 'react';
import {render as ReactRender} from 'react-dom';
import routes from './routes';

ReactRender(
    routes,
    document.getElementById('root')
);
