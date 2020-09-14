import React from 'react';
import './App.css';
import { TodoList } from './Components/TodoList';

function App() {
  return (
    <div className="App">
      <h1 style={{ color: 'white' }}>Todo List</h1>
      <br />
      <TodoList />
    </div>
  );
}

export default App;
