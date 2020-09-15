import { Container } from '@material-ui/core';
import React, { Component } from 'react';
import { AllTodos } from './AllTodos';
import { TodoForm } from './TodoForm';

export class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
    };
  }
  addTodo = (todo) => {
    if (localStorage.getItem('TodosList') == null) {
      let listOfTodo = [];
      listOfTodo.push(todo);
      localStorage.setItem('TodosList', JSON.stringify(listOfTodo));
    } else {
      let listOfTodos = JSON.parse(localStorage.getItem('TodosList'));
      listOfTodos.push(todo);
      localStorage.setItem('TodosList', JSON.stringify(listOfTodos));
    }
    this.setState({
      todos: JSON.parse(localStorage.getItem('TodosList')),
    });
  };
  toggleTodos = (id) => {
    this.setState(
      (state) => ({
        todos: state.todos.map((todo) => {
          if (todo.id === id) {
            return {
              ...todo,
              complete: !todo.complete,
            };
          } else return todo;
          // map should always return a value even conditionally not undefined
        }),
      }),
      () => {
        localStorage.setItem('TodosList', JSON.stringify(this.state.todos));
      }
    );
  };

  deleteTodo = (id) => {
    this.setState(
      (state) => ({
        todos: state.todos.filter((todo) => todo.id !== id),
      }),
      // callback function that fires after the todo is deleted
      () => {
        localStorage.setItem('TodosList', JSON.stringify(this.state.todos));
      }
    );
  };

  componentDidMount() {
    const list = window.localStorage.getItem('TodosList');
    const listFromLS = JSON.parse(list);
    if (listFromLS == null) return false;
    else {
      this.setState({
        todos: listFromLS,
      });
    }
  }

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
