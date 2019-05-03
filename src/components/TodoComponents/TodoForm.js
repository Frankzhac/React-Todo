import React from 'react';

const TodoForm = props => {
  return (
    <form>
    <input
    name="todo"
    type="text"
    value={props.value}
    placeholder="to do task...."
    onChange={props.handleChange}
    />
    <button className="todo-add-button" onclick={props.handleAddTodo}>Add Todo</button>
    </form>
  );
};




export default TodoForm;
