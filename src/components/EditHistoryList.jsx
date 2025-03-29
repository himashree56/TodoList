import React from 'react';
import EditHistoryItem from './EditHistoryItem';

function EditHistoryList({ editHistory, getTaskById }) {
  return (
    <ul className="task-list history-list">
      {editHistory.map(edit => (
        <li key={edit.id} className="task-item edited">
          <EditHistoryItem 
            edit={edit} 
            relatedTask={getTaskById(edit.taskId)} 
          />
        </li>
      ))}
    </ul>
  );
}

export default EditHistoryList;