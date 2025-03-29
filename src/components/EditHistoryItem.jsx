import React from 'react';
import { formatDate } from '../Utils/dateUtils';

function EditHistoryItem({ edit, relatedTask }) {
  return (
    <div className="task-content">
      <div className="task-details">
        <p className="edit-header">
          Task Edited: "{relatedTask ? relatedTask.text : '[Task no longer available]'}"
        </p>
        <div className="edit-diff">
          <p className="previous-text">Previous: "{edit.previousText}"</p>
          <p className="new-text">Changed to: "{edit.newText}"</p>
        </div>
        <div className="task-meta">
          <span className="timestamp">Edited: {formatDate(edit.editedAt)}</span>
        </div>
      </div>
    </div>
  );
}

export default EditHistoryItem;