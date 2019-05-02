import React from 'react';

const TodoForm = props => {
  return (
    <form>
    <input
    name="todo"
    type="text"
    value={props.value}
    placeholder="...todo"
    />
    <button onclick={props.handleAddTodo}>Add Todo</button>
    <button onclick={props.handleAddTodos}>Clear Completed</button>
  );
};




export default TodoForm;
