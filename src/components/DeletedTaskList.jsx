import React from 'react';
import DeletedTaskItem from './DeletedTaskItem';

function DeletedTaskList({ tasks }) {
  return (
    <ul className="task-list history-list">
      {tasks.map(task => (
        <li key={task.id} className="task-item deleted">
          <DeletedTaskItem task={task} />
        </li>
      ))}
    </ul>
  );
}

export default DeletedTaskList;