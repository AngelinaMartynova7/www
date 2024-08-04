import React from 'react';
import { useState } from 'react';

function Task({text, index, onEdit, onDelete}) {
    const [editClicked, setEditClicked] = useState(false);
    const [inputValue, setInputValue] = useState(text);

    return (
        <div className="box">
            {editClicked ? (
                <>
                    <label>
                        <input
                            type="text"
                            value={inputValue}
                            onChange={(e) => setInputValue(e.target.value)}
                        />
                    </label>
                    <button
                        onClick={() => {
                            onEdit(index, inputValue);
                            setEditClicked(false);
                        }}
                        className="btn light"
                    >
                        Сохранить
                    </button>
                </>
            ) : (
                <>
                    <div className="text">{text}</div>
                    <button
                        onClick={() => setEditClicked(true)}
                        className="btn light"
                    >
                        Редактировать
                    </button>
                    <button
                        onClick={() => onDelete(index)}
                        className="btn red"
                    >
                        Удалить
                    </button>
                </>
            )}
        </div>
    );
}

export default Task;