import { List } from "@material-ui/core";
import React from "react";
import Todo from "./Todo";

// This page is responsible for rendering a list of todos in an array

function TodoList({ todos, removeTodo, toggleComplete }) {
  return (
    <List>
      {todos.map((todo) => (
        <Todo
          key={todo.id}
          todo={todo}
          removeTodo={removeTodo}
          toggleComplete={toggleComplete}
        />
      ))}
    </List>
  );
}

export default TodoList;
