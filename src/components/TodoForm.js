import { Button, TextField } from "@material-ui/core";
import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

// This page keeps track of our todo state through a form

const initialState = {
  id: "",
  task: "",
  description: "",
  completed: false,
}

function TodoForm({ addTodo }) {
  const [todo, setTodo] = useState(initialState);
  // state is called todo, with setTodo as the function initialized as an object with 3 properties (id, task, completed)

  const disabled = !todo.task || !todo.description

  function handleChange({ target: { name, value }}) {
    setTodo({ ...todo, [name]: value });
  }

  //updates task property on todo object.  e.target.value contains new text typed in from user
  function handleTaskChange(e) {
    setTodo({ ...todo, task: e.target.value })
  }
  function handleDescriptionChange(e) {
    setTodo({ ...todo, description: e.target.value })
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!disabled) {
      addTodo({ ...todo, id: uuidv4() });
      // reset task input
      setTodo(initialState);
    }
  }
  // trim removes all whitespace from the string

  return (
    <form
      className='todo-form'
      onSubmit={handleSubmit}
      style={{ display: 'flex', flexDirection: 'column' }}
    >
      <TextField
        label='Please enter a Todo:'
        type='text'
        name='task'
        value={todo.task}
        onChange={handleChange}
        autoComplete='off'
      />
      <TextField
        label='Description of task:'
        type='text'
        name='description'
        value={todo.description}
        onChange={handleChange}
        autoComplete='off'
      />
      <Button disabled={disabled} type='submit'>Submit</Button>
    </form>
  );
}

export default TodoForm;
