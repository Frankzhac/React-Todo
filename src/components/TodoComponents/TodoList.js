// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

import React from 'react';
import './Todo.css';
import Todo from './Todo';



const TodoList = props => {
  return (
    <div className="todo-list">
    {props.Todo.map(item => {
      return <Item key={item.id} item={item} toggleItem={props.toggleItem} />;
    })}
    <button className="clear-completed-btn" onClick={props.clearPurchased}>
    Clear completed
    </button>
    </div>
  );
};

export default TodoList;
