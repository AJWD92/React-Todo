import React from 'react';

class TodoForm extends React.Component {
    constructor() {
        super();
        this.state = {
            newTask: ''
        };
    }
    render() {
        console.log('rendering form');
        return (
            <form onSubmit={this.props.handleSubmit}>
                <label htmlFor='task'> New Task</label>
                <input type='text' name='task' id='task' value={this.state.newTask} onChange={this.props.handleChanges} />
                <button onClick={this.props.addTask}>Add</button>
                <button onClick={this.props.filterCompleted}>Clear Completed Task</button>
            </form>
        );
    }
}

export default TodoForm;