import React from 'react';
import CompletedTaskItem from './CompletedTaskItem';

function CompletedTaskList({ tasks }) {
  return (
    <ul className="task-list history-list">
      {tasks.map(task => (
        <li key={task.id} className="task-item completed">
          <CompletedTaskItem task={task} />
        </li>
      ))}
    </ul>
  );
}

export default CompletedTaskList;