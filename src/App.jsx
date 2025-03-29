import React, { useState } from 'react';
import './App.css';
import TabNavigation from './components/TabNavigation';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import EmptyState from './components/EmptyState';
import CompletedTaskList from './components/CompletedTaskList';
import DeletedTaskList from './components/DeletedTaskList';
import EditHistoryList from './components/EditHistoryList';

function App() {
  const [tasks, setTasks] = useState([]);
  const [completedTasks, setCompletedTasks] = useState([]);
  const [deletedTasks, setDeletedTasks] = useState([]);
  const [editHistory, setEditHistory] = useState([]);
  const [newTask, setNewTask] = useState('');
  const [editingTaskId, setEditingTaskId] = useState(null);
  const [editingText, setEditingText] = useState('');
  const [activeTab, setActiveTab] = useState('tasks');
  const handleAddTask = (taskText) => {
    if (taskText.trim() === '') return;
    
    const timestamp = new Date();
    const newTaskObj = {
      id: Date.now(),
      text: taskText,
      completed: false,
      createdAt: timestamp,
      updatedAt: timestamp,
    };
    
    setTasks([newTaskObj, ...tasks]);
  };
  const handleCompleteTask = (id) => {
    const taskToComplete = tasks.find(task => task.id === id);
    const updatedTask = {
      ...taskToComplete,
      completed: true,
      completedAt: new Date()
    };
    setCompletedTasks([updatedTask, ...completedTasks]);
    setTasks(tasks.filter(task => task.id !== id));
  };
  const handleDeleteTask = (id) => {
    const taskToDelete = tasks.find(task => task.id === id);
    const deletedTask = {
      ...taskToDelete,
      deletedAt: new Date()
    };
    setDeletedTasks([deletedTask, ...deletedTasks]);
    setTasks(tasks.filter(task => task.id !== id));
  };
  const handleStartEdit = (task) => {
    setEditingTaskId(task.id);
    setEditingText(task.text);
  };
  const handleSaveEdit = (id) => {
    if (editingText.trim() === '') return;
    const taskToEdit = tasks.find(task => task.id === id);
    if (taskToEdit.text !== editingText) {
      const editRecord = {
        id: Date.now(),
        taskId: id,
        previousText: taskToEdit.text,
        newText: editingText,
        editedAt: new Date()
      };
      
      setEditHistory([editRecord, ...editHistory]);
      setTasks(tasks.map(task => 
        task.id === id 
          ? { ...task, text: editingText, updatedAt: new Date() } 
          : task
      ));
    }
    
    setEditingTaskId(null);
    setEditingText('');
  };
  const handleCancelEdit = () => {
    setEditingTaskId(null);
    setEditingText('');
  };
  const handleEditTextChange = (text) => {
    setEditingText(text);
  };
  const getTaskById = (id) => {
    return [...tasks, ...completedTasks, ...deletedTasks].find(task => task.id === id);
  };

  return (
    <div className="todo-app">
      <div className="app-container">
        <h1>Your Todo Task Master</h1>
        
        <TabNavigation 
          activeTab={activeTab} 
          onTabChange={setActiveTab} 
        />
        
        {activeTab === 'tasks' && (
          <>
            <TaskForm 
              value={newTask} 
              onChange={setNewTask} 
              onSubmit={(e) => {
                e.preventDefault();
                handleAddTask(newTask);
                setNewTask('');
              }} 
            />
            
            <div className="tasks-container">
              {tasks.length === 0 ? (
                <EmptyState 
                  title="Your task list is empty" 
                  message="Add a task to get started!" 
                />
              ) : (
                <TaskList 
                  tasks={tasks}
                  editingTaskId={editingTaskId}
                  editingText={editingText}
                  onEditStart={handleStartEdit}
                  onEditSave={handleSaveEdit}
                  onEditCancel={handleCancelEdit}
                  onEditChange={handleEditTextChange}
                  onComplete={handleCompleteTask}
                  onDelete={handleDeleteTask}
                />
              )}
            </div>
          </>
        )}
        
        {activeTab === 'completed' && (
          <div className="history-container">
            {completedTasks.length === 0 ? (
              <EmptyState 
                title="No completed tasks yet" 
                message="Complete a task to see history!" 
              />
            ) : (
              <CompletedTaskList tasks={completedTasks} />
            )}
          </div>
        )}
        
        {activeTab === 'deleted' && (
          <div className="history-container">
            {deletedTasks.length === 0 ? (
              <EmptyState 
                title="No deleted tasks yet" 
                message="Task deletion history will appear here" 
              />
            ) : (
              <DeletedTaskList tasks={deletedTasks} />
            )}
          </div>
        )}
        
        {activeTab === 'edited' && (
          <div className="history-container">
            {editHistory.length === 0 ? (
              <EmptyState 
                title="No edit history yet" 
                message="Edit a task to see history!" 
              />
            ) : (
              <EditHistoryList 
                editHistory={editHistory} 
                getTaskById={getTaskById} 
              />
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default App;