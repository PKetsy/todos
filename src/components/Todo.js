import { Checkbox, IconButton, ListItem, Typography } from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import React from "react";

function Todo({ todo, toggleComplete, removeTodo }) {
  function handleCheckboxClick() {
    toggleComplete(todo.id);
  }

  function handleRemoveClick() {
    removeTodo(todo.id);
  }

  return (
    <ListItem style={{ display: "flex" }}>
      <Checkbox checked={todo.completed} onClick={handleCheckboxClick} />
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <Typography
          variant='body1'
          style={{
            textDecoration: todo.completed ? "line-through" : null,
          }}
          >
          {todo.task}
        </Typography>
        <Typography
          variant='body2'
          style={{
            textDecoration: todo.completed ? "line-through" : null,
          }}
          >
          {todo.description}
        </Typography>
      </div>
      <IconButton onClick={handleRemoveClick}>
        <CloseIcon />
      </IconButton>
    </ListItem>
  );
}

export default Todo;
