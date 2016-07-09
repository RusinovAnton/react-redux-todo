import React from 'react';

export default class FilterLink extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let {
            isActive,
            children,
            filter,
            onFilterClick
        } = this.props;

        // if (isActive) {
        //     return (
        //         <span>{children}</span>
        //         )
        // } else {
            return (
                <a href="#"
                    onClick={onFilterClick.bind(this, filter)}>
                    {children}
                </a>
            );
        // }
    }
}
