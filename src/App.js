import React from 'react';
import TodoForm from './components/TodoComponents/TodoForm';
import TodoList from './components/TodoComponents/TodoList';


class App extends React.Component {
  constructor() {
    super();
    this.state = {
        tasks: [
          {
            task: 'Organize Garage',
            id: 1528817077286,
            completed: false
          },
          {
            task: 'Bake Cookies',
            id: 1528817084358,
            completed: false
          }
        ],
      task: ''
    };
  }

  addTask = e => {
    e.preventDefault();
    const newTask = {
      task: this.state.task,
      id: Date.now(),
      completed: false
    }
    this.setState({
      task: [...this.state.tasks, newTask]
    })
  }
  filterCompleted = e => {
    e.preventDefault();
    let tasks = this.state.tasks.filter(task => !task.completed);
    this.setState({ tasks })
  }

  handleChanges = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.addTask(this.state.newTask);
    this.setState({newTask: ''})
  }

  toggleCompleted = id => {
    this.setState ({
      task: this.state.task.map(task => {
        if (task.id === id) {
          return {
            ...task, completed: !task.completed
          }
        } else {
          return task;
        }
      })
    })
  }
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  render() {
    return (
      <div className='App'>
        <div className='Header'>
        <h2>Welcome to your Todo App!</h2>
        <TodoForm 
        value={this.state.task}
        handleChanges={this.handleChanges}
        addTask={this.addTask}
        filterCompleted={this.filterCompleted}
        />
        </div>
        <TodoList toggleCompleted={this.toggleCompleted} taska={this.state.tasks} />
      </div>
    );
  }
}

export default App;
