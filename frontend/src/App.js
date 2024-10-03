import React, { useState } from 'react';
import TaskList from './TaskList';

function App() {
  const [tasks, setTasks] = useState([]);

  const handleTaskAdded = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  return (
      <div className="App">
        <h1>Aufgabenverwaltungssystem</h1>
        <TaskList tasks={tasks} />
      </div>
  );
}

export default App;