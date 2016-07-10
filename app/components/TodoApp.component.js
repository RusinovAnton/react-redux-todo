import React from 'react';

import Navigation from './common/Navigation.component';

export default class TodoApp extends React.Component {
    render() {
        return (
                <div>
                    <header>
                        <Navigation/>
                    </header>
                    {this.props.children}
                </div>
            )
    }
}
