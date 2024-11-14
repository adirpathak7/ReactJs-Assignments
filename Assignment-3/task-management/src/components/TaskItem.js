import React from 'react';

const TaskItem = ({ task, toggleTaskStatus, deleteTask }) => {
  return (
    <div className="relative flex items-center justify-between p-4 bg-teal-100 w-full rounded-lg shadow-md transition-transform transform hover:scale-105">
      <div
        contentEditable
        className="text-left text-gray-700 font-medium overflow-hidden whitespace-nowrap text-ellipsis pr-10"
      >
        {task.name}
      </div>

      <div className="absolute top-2 right-2 flex items-center gap-2">
        <button
          onClick={() => deleteTask(task.id)}
          className="bg-red-500 text-white rounded-full w-4 h-4 flex items-center justify-center hover:bg-red-600 transition-transform transform hover:scale-110"
          aria-label="Delete Task"
        >
          ×
        </button>
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => toggleTaskStatus(task.id)}
          className="form-checkbox h-4 w-4 text-green-500 border-gray-300 rounded focus:ring-2 focus:ring-green-500"
          aria-label="Mark as Completed"
        />
      </div>

      <div
        className={`absolute bottom-2 right-2 px-3 py-1 rounded-md text-xs font-semibold ${
          task.completed ? 'bg-green-200 text-green-800' : 'bg-yellow-200 text-yellow-800'
        }`}
      >
        {task.completed ? 'Completed' : 'Pending'}
      </div>
    </div>
  );
};

export default TaskItem;
