import React, { Component } from 'react';
import TaskList from './TaskList';
import TaskForm from './TaskForm';

class TaskManager extends Component {
    state = {
        tasks: [
            { id: 1, title: 'React Assignment', completed: false },
            { id: 2, title: 'Java Assignment', completed: false }
        ]
    };

    addTask = (title) => {
        const newTask = { id: Date.now(), title, completed: false };
        this.setState({ tasks: [...this.state.tasks, newTask] });
    };

    deleteTask = (id) => {
        this.setState({ tasks: this.state.tasks.filter(task => task.id !== id) });
    };

    toggleTaskCompletion = (id) => {
        this.setState({
            tasks: this.state.tasks.map(task =>
                task.id === id ? { ...task, completed: !task.completed } : task
            )
        });
    };

    render() {
        return (
            <div className="container mx-auto p-4">
                <TaskForm addTask={this.addTask} />
                <TaskList
                    tasks={this.state.tasks}
                    deleteTask={this.deleteTask}
                    toggleTaskCompletion={this.toggleTaskCompletion}
                />
            </div>
        );
    }
}

export default TaskManager;
