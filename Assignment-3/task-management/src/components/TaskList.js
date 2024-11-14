import React from 'react';
import TaskItem from './TaskItem';

const TaskList = ({ tasks, toggleTaskStatus, deleteTask }) => {
  return (
    <div className="flex flex-wrap gap-4 w-full max-w-md">
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          toggleTaskStatus={toggleTaskStatus}
          deleteTask={deleteTask}
        />
      ))}
    </div>
  );
};

export default TaskList;
