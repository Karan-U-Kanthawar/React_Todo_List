import { Button } from '@material-ui/core';
import React from 'react';

export function AllTodos(props) {
  return (
    <li
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        backgroundColor: '#3f51b5',
        alignItems: 'center',
        margin: '0.25rem',
        fontSize: '1rem',
        fontWeight: '500',
        listStyleType: 'none',
        border: '1px solid darkblue',
        padding: '1rem',
        borderRadius: '5px',
      }}
    >
      <span
        style={{
          textDecoration: props.todo.complete ? 'line-through' : '',
        }}
        onClick={props.toggleTodos}
      >
        {props.todo.text}
      </span>
      <span></span>
      <Button style={{ backgroundColor: 'white' }} onClick={props.deleteTodo}>
        Delete
      </Button>
    </li>
  );
}
