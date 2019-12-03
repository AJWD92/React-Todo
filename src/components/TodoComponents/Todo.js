import React from 'react';
import "./Todo.css";

const Todo = props => {
    let verboseClassName = "todo";
    if (props.todo.complete) {
        verboseClassName = verboseClassName + " complete";
    }

    const handleClick = () => {
        props.toggleComplete(props.todo.id);
    }

    return (
        <div 
            onClick={handleClick}  
            className={verboseClassName}>
            <p>{props.todo.task}</p>    
        </div>
    )
}

export default Todo;