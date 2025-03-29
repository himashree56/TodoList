import React from 'react';

function TabNavigation({ activeTab, onTabChange }) {
  return (
    <div className="tabs">
      <button 
        className={activeTab === 'tasks' ? 'active' : ''} 
        onClick={() => onTabChange('tasks')}
      >
        Active Tasks
      </button>
      <button 
        className={activeTab === 'completed' ? 'active' : ''} 
        onClick={() => onTabChange('completed')}
      >
        Completed
      </button>
      <button 
        className={activeTab === 'deleted' ? 'active' : ''} 
        onClick={() => onTabChange('deleted')}
      >
        Deleted
      </button>
      <button 
        className={activeTab === 'edited' ? 'active' : ''} 
        onClick={() => onTabChange('edited')}
      >
        Edit History
      </button>
    </div>
  );
}

export default TabNavigation;