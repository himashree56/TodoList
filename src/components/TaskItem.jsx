import React from 'react';
import { formatDate } from '../Utils/dateUtils';
function TaskItem({ 
  task, 
  isEditing, 
  editingText, 
  onEditStart, 
  onEditSave, 
  onEditCancel,
  onEditChange,
  onComplete, 
  onDelete 
}) {
  if (isEditing) {
    return (
      <div className="edit-form">
        <input
          type="text"
          value={editingText}
          onChange={(e) => onEditChange(e.target.value)}
          className="edit-input"
          autoFocus
        />
        <div className="edit-actions">
          <button onClick={() => onEditSave(task.id)} className="save-button">Save</button>
          <button onClick={onEditCancel} className="cancel-button">Cancel</button>
        </div>
      </div>
    );
  }

  return (
    <div className="task-content">
      <div className="task-details">
        <p className="task-text">{task.text}</p>
        <div className="task-meta">
          <span className="timestamp">Created: {formatDate(task.createdAt)}</span>
          {task.updatedAt > task.createdAt && (
            <span className="timestamp">Updated: {formatDate(task.updatedAt)}</span>
          )}
        </div>
      </div>
      <div className="task-actions">
        <button onClick={() => onEditStart(task)} className="edit-button">Edit</button>
        <button onClick={() => onComplete(task.id)} className="complete-button">Complete</button>
        <button onClick={() => onDelete(task.id)} className="delete-button">Delete</button>
      </div>
    </div>
  );
}

export default TaskItem;