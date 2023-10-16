import React, { useState } from 'react';

function Input({ onAddTodo }) {
    const [description, setDescription] = useState('');

    const handleChange = (event) => {
        setDescription(event.target.value);
    };

    const handleKeyPress = (event) => {
        if (event.key === 'Enter' && description.trim() !== "") {
            onAddTodo(description);
            setDescription("");  // This line resets the input field after adding with Enter
        }
    };

    const handleAdd = () => {
        if (description.trim() !== "") {
            onAddTodo(description);
            setDescription("");  // This line resets the input field after adding with the plus sign
        }
    };

    return (
        <div className="input-container">
            <input 
                type="text" 
                value={description} 
                onChange={handleChange} 
                onKeyPress={handleKeyPress}
                placeholder="Type your task here..." 
            />
            <button className="addButton" onClick={handleAdd}></button>
        </div>
    );
}

export default Input;
