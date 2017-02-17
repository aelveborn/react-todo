import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as todoActions from '../../actions/todo';

@connect((store) => {
    return {
        todos: store.todo.todos,
    }
})

class Layout extends Component {
    
    componentWillMount() {
        this.props.dispatch(todoActions.get());
    }

    render() {
        console.log(this.props);
        const { list } = this.props.todos;

        {list.length}

        if(!list.length) {
            return <h1>No todos {list.length}</h1>;
        }

        const todoList = list.map(todo => <li key={todo.key}>{todo.text}</li>);

        return (
            <div>
                <h1>Todos:</h1>
                <ul>{todoList}</ul>
            </div>
        );
    }
}

export default Layout;