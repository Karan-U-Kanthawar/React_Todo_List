import { Container } from '@material-ui/core';
import React, { Component } from 'react';
import { AllTodos } from './AllTodos';
import { TodoForm } from './TodoForm';

export class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
      searchTerm: '',
    };
  }
  addTodo = (todo) => {
    this.setState((state) => ({
      todos: [todo, ...state.todos],
    }));
  };
  toggleTodos = (id) => {
    this.setState((state) => ({
      todos: state.todos.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            complete: !todo.complete,
          };
        } else return todo;
        // map should always return a value even conditionally not undefined
      }),
    }));
  };
  deleteTodo = (id) => {
    this.setState((state) => ({
      todos: state.todos.filter((todo) => {
        return todo.id !== id;
      }),
    }));
  };

  render() {
    return (
      <div>
        <TodoForm onSubmit={this.addTodo} />
        <br />
        <br />
        <Container
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          maxWidth="sm"
        >
          <div>
            {this.state.todos.map((todo) => (
              <AllTodos
                key={todo.id}
                todo={todo}
                toggleTodos={() => this.toggleTodos(todo.id)}
                deleteTodo={() => this.deleteTodo(todo.id)}
              />
            ))}
          </div>
        </Container>
      </div>
    );
  }
}
