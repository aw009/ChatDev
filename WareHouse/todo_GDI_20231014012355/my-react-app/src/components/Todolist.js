import React from 'react';

function TodoList({ className, todos, handleCompleteTodo }) {
  return (
    <table className={className}> {/* <- Applying the className prop to the table */}
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
              <button onClick={() => handleCompleteTodo(todo.originalIndex ? todo.originalIndex : index)}>Complete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default TodoList;
