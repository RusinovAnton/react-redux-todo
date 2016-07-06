function addTodo(state, action) {
    return [...state,
        {
            id: action.id,
            title: action.title,
            completed: false
        }
    ]
}

function toggleTodo(state, action) {
    return state.map(todo => {
        if (todo.id !== action.id) {
            return todo;
        }
        return {
            ...todo,
            completed: !todo.completed
        }
    })
}

export default function (state = [], action) {
    console.log('Reduce todo');
    switch (action.type) {
        case 'ADD_TODO':
            return addTodo(state, action);
        case 'TOGGLE_TODO':
            return toggleTodo(state, action);
        default:
            return state;

    }
}
