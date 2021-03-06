import React from 'react';
import NavLink from './NavLink.component';

export default class Navigation extends React.Component {
    render() {
        return (
                <nav className="site-navigation">
                    <p>
                        <NavLink to="/" onlyActiveOnIndex={true}>Todos</NavLink>
                        <NavLink to="/trash">Trash</NavLink>
                    </p>
                </nav>
            )
    }
}
