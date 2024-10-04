import React, { useState } from 'react';

interface AddTaskFormProps {
    onTaskAdded: (task: { id: number; title: string; completed: boolean }) => void;
}

const AddTaskForm: React.FC<AddTaskFormProps> = ({ onTaskAdded }) => {
    const [title, setTitle] = useState('');
    const [completed, setCompleted] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!title || title.trim() === '') {
            alert('Title cannot be empty');
            return;
        }

        await createTask({ title, completed });
    };

    const createTask = async (task: { title: string; completed: boolean }) => {
        try {
            const response = await fetch('http://localhost:8080/api/tasks', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(task),
            });

            if (!response.ok) {
                await handleErrorResponse(response);
                return;
            }

            const newTask = await response.json();
            onTaskAdded(newTask);
            setTitle('');

        } catch (error) {
            handleUnexpectedError(error);
        }
    };

    const handleErrorResponse = async (response: Response) => {
        const errorData = await response.json();
        console.error('Error:', errorData);
        alert('Error: ' + JSON.stringify(errorData));
    };

    const handleUnexpectedError = (error: any) => {
        console.error('Request failed:', error);
        alert('An unexpected error occurred. Please try again.');
    };

    return (
        <form onSubmit={handleSubmit} className="task-form">
            <div>
                <input
                    id="title"
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="Aufgabentitel eingeben"
                />
            </div>

            <div>
                <select
                    id="status"
                    value={completed ? 'completed' : 'uncompleted'}
                    onChange={(e) => setCompleted(e.target.value === 'completed')}
                >
                    <option value="uncompleted">uncompleted</option>
                    <option value="completed">completed</option>
                </select>
            </div>

            <button type="submit">Aufgabe hinzufügen</button>
        </form>
    );
}

export default AddTaskForm;