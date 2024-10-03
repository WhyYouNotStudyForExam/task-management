import React, { useState } from 'react';

interface AddTaskFormProps {
    onTaskAdded: (task: { id: number; title: string; completed: boolean }) => void;
}

const AddTaskForm: React.FC<AddTaskFormProps> = ({ onTaskAdded }) => {
    const [title, setTitle] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        fetch('http://localhost:8080/api/tasks', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ title, completed: false }),
        })
            .then(response => response.json())
            .then(data => {
                onTaskAdded(data);
                setTitle('');
            })
            .catch(error => console.error('Error adding task:', error));
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Enter task title"
            />
            <button type="submit">Add Task</button>
        </form>
    );
}

export default AddTaskForm;