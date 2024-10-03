import React, { useState } from 'react';
import TaskList from './TaskList';
import AddTaskForm from './AddTaskForm';

function App() {
  const [tasks, setTasks] = useState([]);

  const handleTaskAdded = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  return (
      <div className="App">
        <h1>Task Management</h1>
        <AddTaskForm onTaskAdded={handleTaskAdded} />
        <TaskList tasks={tasks} />
      </div>
  );
}

export default App;