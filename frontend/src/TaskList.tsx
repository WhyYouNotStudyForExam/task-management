import React, { useState, useEffect } from 'react';
import AddTaskForm from './AddTaskForm';

interface Task {
    id: number;
    title: string;
    completed: boolean;
}

interface TaskListProps {
    tasks: Task[];
    onTaskAdded: (newTask: Task) => void;
}

const TaskList: React.FC<TaskListProps> = () => {
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
        <div className="task-container">
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