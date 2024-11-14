import React, { useState } from 'react';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [taskStats, setTaskStats] = useState({ total: 0, pending: 0, completed: 0 });

  const addTask = (taskName) => {
    const newTask = { id: Date.now(), name: taskName, completed: false };
    setTasks([...tasks, newTask]);
    setTaskStats({
      total: taskStats.total + 1,
      pending: taskStats.pending + 1,
      completed: taskStats.completed,
    });
  };

  const toggleTaskStatus = (taskId) => {
    setTasks(tasks.map(task => task.id === taskId ? { ...task, completed: !task.completed } : task));
    setTaskStats(prev => ({
      total: prev.total,
      pending: tasks.filter(task => !task.completed).length,
      completed: tasks.filter(task => task.completed).length,
    }));
  };

  const deleteTask = (taskId) => {
    setTasks(tasks.filter(task => task.id !== taskId));
    setTaskStats(prev => ({
      total: prev.total - 1,
      pending: prev.pending - 1,
      completed: prev.completed,
    }));
  };

  return (
    <div className="flex flex-col items-center p-8 font-sans">
      <h1 className="text-3xl font-semibold mb-4">Task Manager</h1>
      <div className="flex gap-4 mb-6 p-4 bg-gray-100 rounded-lg shadow-md max-w-md w-full justify-center">
        <p>Total Tasks: <span>{taskStats.total}</span></p>
        <p>Pending: <span>{taskStats.pending}</span></p>
        <p>Completed: <span>{taskStats.completed}</span></p>
      </div>
      <TaskForm addTask={addTask} />
      <TaskList tasks={tasks} toggleTaskStatus={toggleTaskStatus} deleteTask={deleteTask} />
    </div>
  );
};

export default App;
