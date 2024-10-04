import React, { useState } from 'react';
import TaskList from './TaskList';

interface Task {
    id: number;
    title: string;
    completed: boolean;
}

function App() {
    const [tasks, setTasks] = useState<Task[]>([]);

    const handleTaskAdded = (newTask: Task) => {
        setTasks([...tasks, newTask]);
    };

  return (
      <div className="App">
        <h1>Aufgabenverwaltungssystem</h1>
        <TaskList tasks={tasks} onTaskAdded={handleTaskAdded}/>
      </div>
  );
}

export default App;