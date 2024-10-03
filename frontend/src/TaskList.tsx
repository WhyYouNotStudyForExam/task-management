import React, { useState, useEffect } from 'react';

interface Task {
    id: number;
    title: string;
    completed: boolean;
}

const TaskList: React.FC = () => {
    const [tasks, setTasks] = useState<Task[]>([]);

    useEffect(() => {
        fetch('http://localhost:8080/api/tasks')
            .then(response => response.json())
            .then(data => setTasks(data))
            .catch(error => console.error('Error fetching tasks:', error));
    }, []);

    return (
        <div>
            <h1>Task List</h1>
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