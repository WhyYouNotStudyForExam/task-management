import React, { useState, useEffect } from 'react';
import AddTaskForm from './AddTaskForm';

interface Task {
    id: number;
    title: string;
    completed: boolean;
}

const TaskList: React.FC = () => {
    const [tasks, setTasks] = useState<Task[]>([]);

    const loadTasks = async () => {
        const response = await fetch('http://localhost:8080/api/tasks');
        const data = await response.json();
        setTasks(data);
    };

    useEffect(() => {
        loadTasks();
    }, []);

    const handleTaskAdded = (newTask: Task) => {
         loadTasks();
    };

    return (
        <div>
            <h2>Neue Aufgabe hinzufügen</h2>
            <AddTaskForm onTaskAdded={handleTaskAdded}/>
            <h2>Aufgabenliste</h2>
            <ul>
                {tasks.map(task => (
                    <li key={task.id}>
                        {task.title} - {task.completed ? 'Completed' : 'Incomplete'}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default TaskList;