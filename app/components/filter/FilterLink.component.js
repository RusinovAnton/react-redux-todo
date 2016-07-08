import React from 'react';

export default class FilterLink extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <a href="#"
                onClick={this.props.onFilterClick.bind(this, this.props.filter)}>
                {this.props.children}
            </a>
        );
    }
}
