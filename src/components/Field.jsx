import React from 'react';
import { useState } from 'react';
import Task from './Task';

function Field() {
    const [tasks, setTasks] = useState(
        [/*
            "Hey, it is me!",
            "Task number 2!",
            "Hello World!"*/
        ]
    );

    const handleEdit = (index, newText) => {
        const newTasks = tasks.map((task, i) =>
            i === index ? newText : task
        );
        setTasks(newTasks);
    };

    const handleDelete = (index) => {
        const newTasks = tasks.filter((_, i) => i !== index);
        setTasks(newTasks);
    };

    const handleAdd = () => {
        setTasks([...tasks, "New Task"]);
    };

    return (
        <div className="field">
            {tasks.map((task, index) => (
                <Task
                    key={index}
                    index={index}
                    text={task}
                    onEdit={handleEdit}
                    onDelete={handleDelete}
                />
            ))}
            <button onClick={handleAdd} className="btn light">
                Добавить задачу
            </button>
        </div>
    )
    }

export default Field;