import React from 'react';
import TaskItem from './TaskItem';

function TaskList({ 
  tasks, 
  editingTaskId, 
  editingText, 
  onEditStart, 
  onEditSave, 
  onEditCancel,
  onEditChange,
  onComplete, 
  onDelete 
}) {
  return (
    <ul className="task-list">
      {tasks.map(task => (
        <li key={task.id} className="task-item">
          <TaskItem
            task={task}
            isEditing={editingTaskId === task.id}
            editingText={editingText}
            onEditStart={onEditStart}
            onEditSave={onEditSave}
            onEditCancel={onEditCancel}
            onEditChange={onEditChange}
            onComplete={onComplete}
            onDelete={onDelete}
          />
        </li>
      ))}
    </ul>
  );
}

export default TaskList;