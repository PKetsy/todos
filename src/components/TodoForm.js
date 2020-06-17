import { Button, TextField } from "@material-ui/core";
import React, { useState } from "react";
import { v4 as uuid } from "uuid";

// This page keeps track of our todo state through a form

function TodoForm({ addTodo }) {
  const [todo, setTodo] = useState({
    id: "",
    task: "",
    completed: false,
  });
  // state is called todo, with setTodo as the function initialized as an object with 3 properties (id, task, completed)

  function handleTaskInputChange(e) {
    setTodo({ ...todo, task: e.target.value });
  }
  //updates task property on todo object.  e.target.value contains new text typed in from user

  function handleSubmit(e) {
    e.preventDefault();
    if (todo.task.trim()) {
      addTodo({ ...todo, id: uuid.v4 });
      // reset task input
      setTodo({ ...todo, task: "" });
    }
  }
  // trim removes all whitespace from the string

  return (
    <form className='todo-form' onSubmit={handleSubmit}>
      <TextField
        label='Task'
        name='task'
        type='text'
        value={todo.task}
        onChange={handleTaskInputChange}
        autoComplete='off'
      />
      <button type='submit'>Submit</button>
    </form>
  );
}

export default TodoForm;
