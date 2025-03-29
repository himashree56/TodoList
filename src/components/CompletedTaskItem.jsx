import React from 'react';
import { formatDate } from '../Utils/dateUtils';

function CompletedTaskItem({ task }) {
  return (
    <div className="task-content">
      <div className="task-details">
        <p className="task-text">{task.text}</p>
        <div className="task-meta">
          <span className="timestamp">Created: {formatDate(task.createdAt)}</span>
          <span className="timestamp">Completed: {formatDate(task.completedAt)}</span>
        </div>
      </div>
    </div>
  );
}

export default CompletedTaskItem;