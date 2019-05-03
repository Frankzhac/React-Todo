import React from 'react';
import ReactDOM from "react-dom";

// import './App.css';

import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';


const Todo = [
  {
    task: 'Practice React',
    id: 5,
    completed: false
  },
  {
    task: 'Do coding exercises',
    id: 2,
    completed: false
  },
  {
    task: 'rewatch lectures',
    id: 7,
    completed: false
  },
  {
    task: 'Work on Burger project',
    id: 10,
    completed: false
  },
];

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      Todo: Todo
    };
  }
}


toggleItem = itemId => {
  this.setState({
    Todo: this.state.Todo.map(item => {
      if (itemId === item.id) {
        return {
          ...item,
          purchased: !item.purchased
        };
      } else {
        return item;
      }
    })
  });
};

addItem = (event, item) => {
  event.preventDefault();
  const newItem = {
    name: item,
    id: Date.now(),
    purchased: false
  };
  this.setState({
    Todo: [...this.state.Todo, newItem]
  });
};

clearPurchased = event => {
  event.preventDefault();
  this.setState({
    Todo: this.state.Todo.filter(item => {
      return !item.purchased;
    })
  });
};

render() {
  return (
    <div className="App">
      <div className="header">
        <h1>Todo List</h1>
        <TodoForm addItem={this.addItem} />
      </div>
      <TodoList
        Todo={this.state.Todo}
        toggleItem={this.toggleItem}
        clearPurchased={this.clearPurchased}
        />
    </div>
  );
};


export default App;
