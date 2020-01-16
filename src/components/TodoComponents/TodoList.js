// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';
import Todo from './Todo';
import SearchForm from './SearchForm';


const TodoList = props => {
    return (
            
        <div className="todo-list">
            <SearchForm todos={props.todos}/>
            {props.todos.map(todo => (
                <Todo
                    key={todo.id}
                    todo={todo}
                    toggleComplete={props.toggleComplete}
                    />
            ))}
            <button 
                className="clear-btn"
                onClick={props.clearCompleted}>
                Clear Completed
            </button> 
        </div>
    )
}

export default TodoList;