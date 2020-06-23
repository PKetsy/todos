import Typography from "@material-ui/core/Typography";
import React, { useEffect, useState } from "react";
import "./App.css";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

const LOCAL_STORAGE_KEY = "react-todo-list-todos";
//stores the todos

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const storageTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (storageTodos) {
      setTodos(storageTodos);
      //JSON.parse converts strings to objects
    }
  }, []);
  //useEffect takes in 2 parameters: Function which is the (effect) and a dependency array
  //  dependency array is a parameter that determines if the effect gets fired off our not
  //   1 or more variables change?  Effect is fired
  useEffect(() => {
    //fires when todos array gets updated
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos));
  }, [todos]);

  function addTodo(todo) {
    setTodos([todo, ...todos]);
  }
  // takes in a todo, and adds it into the array of todos
  // setTodos([todo, ...todos]) means passing in an array with a new array in beginning, with old array spread over it.

  function toggleComplete(id) {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed,
            //causes false to become true, and vise versa
          };
        }
        return todo;
      })
    );
  }

  function removeTodo(id) {
    setTodos(todos.filter((todo) => todo.id !== id));
  }
  //filter takes a function and decides wheter or not to keep an element in an array
  //   in this case we want to keep the todo if the iD is not the one we are looking for, otherwise remove todo from list

  return (
    <div className='App'>
      <Typography style={{ padding: 16 }} varient='h1'>
        Todos for the day: {todos.length}
      </Typography>
      <TodoForm addTodo={addTodo} />
      <TodoList
        todos={todos}
        removeTodo={removeTodo}
        toggleComplete={toggleComplete}
      />
    </div>
  );
}

export default App;
