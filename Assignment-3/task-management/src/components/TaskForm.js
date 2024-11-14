import React, { useState } from 'react';

const TaskForm = ({ addTask }) => {
  const [taskName, setTaskName] = useState('');

  const handleAddTask = () => {
    if (taskName.trim()) {
      addTask(taskName);
      setTaskName('');
    } else {
      alert('Please enter a task name.');
    }
  };

  return (
    <div className="flex gap-2 mb-4 w-full max-w-md">
      <input
        type="text"
        placeholder="Enter the task"
        className="flex-1 border-b-2 border-gray-300 py-2 focus:border-gray-700 outline-none"
        value={taskName}
        onChange={(e) => setTaskName(e.target.value)}
      />
      <button
        onClick={handleAddTask}
        className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
      >
        Add Task
      </button>
    </div>
  );
};

export default TaskForm;