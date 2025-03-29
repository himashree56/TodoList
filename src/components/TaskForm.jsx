import React from 'react';

function TaskForm({ value, onChange, onSubmit }) {
  return (
    <form onSubmit={onSubmit} className="add-task-form">
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Add a new task..."
        className="task-input"
      />
      <button type="submit" className="add-button">Add</button>
    </form>
  );
}

export default TaskForm;