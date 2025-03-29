import React from 'react';

function EmptyState({ title, message }) {
  return (
    <div className="empty-state">
      <p>{title}</p>
      <p>{message}</p>
    </div>
  );
}

export default EmptyState;