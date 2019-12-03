// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';
import Todo from './Todo'

const TodoList = props => {
    {props.tasks.map(task => (
        <Todo 
        key={task.id}
        name={task}
        toggleCompleted={props.toggleCompleted}
        />
    ))}
}

export default TodoList;
