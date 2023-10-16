import React, { useState } from 'react';
import TodoList from './components/todolist';
import './App.css';

function App() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleAddTodo = () => {
    if (inputValue.trim() !== '') {
      const newTodo = {
        dateAdded: new Date().toLocaleString(),
        description: inputValue,
        dateCompleted: null,
      };
      setTodos([...todos, newTodo]);
      setInputValue('');
    }
  };

  const handleCompleteTodo = (index) => {
    const updatedTodos = [...todos];
    updatedTodos[index].dateCompleted = new Date().toLocaleString();
    setTodos(updatedTodos);
  };

  const activeTodos = todos.map((todo, index) => ({...todo, originalIndex: index}))
                          .filter((todo) => todo.dateCompleted === null);

  const completedTodos = todos.map((todo, index) => ({...todo, originalIndex: index}))
                          .filter((todo) => todo.dateCompleted !== null);


  return (
    <div className="App">
      <h1 className="header">Todo items</h1>
      <div className="input-container">
        <input type="text" value={inputValue} onChange={handleInputChange} placeholder="Type your task here..." />
        <button onClick={handleAddTodo}>Submit</button>
      </div>
      <h2 className="table-header">Active Todo Items</h2>
      <TodoList todos={activeTodos} handleCompleteTodo={handleCompleteTodo} />
      <h2 className="table-header">Completed Todo Items</h2>
      <TodoList todos={completedTodos} />
    </div>
  );
}

export default App;
