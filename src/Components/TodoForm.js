import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import { TextField } from '@material-ui/core';
import { nanoid } from 'nanoid';

export class TodoForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
    };
  }
  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };
  handleSubmit = (event) => {
    event.preventDefault();
    // prevents an empty todo
    if (this.state.text) {
      this.props.onSubmit(
        {
          id: nanoid(),
          text: this.state.text,
          complete: false,
        },
        this.setState({
          text: '',
        })
      );
    }
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <TextField
            style={{ backgroundColor: 'white', borderRadius: '5px' }}
            name="text"
            label="Add Todo"
            variant="filled"
            value={this.state.text}
            placeholder="enter new TODO"
            onChange={this.handleChange}
            autoFocus={true}
          />
          <br />
          <br />
          <Button type="submit" variant="contained" color="primary">
            Add Todo
          </Button>
        </form>
      </div>
    );
  }
}
