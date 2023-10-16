import React from 'react';

function TodoList({ className, todos, handleCompleteTodo, handleDeleteTodo }) {
  return (
    <table className={className}>
      <thead>
        <tr className="table-heading">
          <th>Date Added</th>
          <th>Description</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {todos.map((todo, index) => (
          <tr key={index} className={index % 2 === 0 ? 'even-row' : 'odd-row'}>
            <td>{todo.dateAdded}</td>
            <td>{todo.description}</td>
            <td>
              {todo.dateCompleted ? (
                <button onClick={() => handleDeleteTodo(todo.originalIndex)}>Delete</button>
              ) : (
                <button onClick={() => handleCompleteTodo(todo.originalIndex)}>Complete</button>
              )}
            </td>

          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default TodoList;
