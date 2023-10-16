import React, { useState } from 'react';
import TodoList from './components/Todolist';
import Input from './components/Input';
import './App.css';

function App() {
  const [todos, setTodos] = useState([]);

  const handleAddTodo = (description) => {
    if (description.trim() !== '') {
      const newTodo = {
        dateAdded: new Date().toLocaleString(),
        description: description,
        dateCompleted: null,
      };
      setTodos([...todos, newTodo]);
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
    <div className="container">
      <div className="App">
        <h1 className="header">Todo items</h1>
        <Input onAddTodo={handleAddTodo} />
        <h2 className="table-header">Active Todo Items</h2>
        <TodoList className="active-tasks" todos={activeTodos} handleCompleteTodo={handleCompleteTodo} />
        <hr />
        <h2 className="table-header">Completed Todo Items</h2>
        <TodoList className="completed-tasks" todos={completedTodos} />
      </div>
    </div>
  );
}

export default App;
