import React, { useState } from "react";
import { TodoList } from "./TodoList";
import { AddTodoForm } from "./AddTodoForm";

const initialTodos: Array<Todo> = [
  { text: "Walk the dog", complete: true },
  { text: "Write App", complete: false },
];

function App() {
  const [todos, setTodos] = useState(initialTodos);

  const toggleTodo: ToggleTodo = (selectedTodo) => {
    const newTodos = todos.map((todo) => {
      if (todo == selectedTodo) {
        return {
          ...todo,
          complete: !todo.complete,
        };
      }
      return todo;
    });
    setTodos(newTodos);
  };

  const addTodo: AddTodo = (newTodo) => {
    newTodo.trim() !== "" &&
      setTodos([...todos, { text: newTodo, complete: false }]);
  };

  return (
    <React.Fragment>
      <TodoList todos={todos} toggleTodo={toggleTodo} />
      <AddTodoForm addTodo={addTodo} />
    </React.Fragment>
  );
}

export default App;

// props = like arguments to a function
// they are what you want to initialize your component to, or what you want your component to render like

// state = state is handled inside of a component
// ex: the current count is handled by the state, while an initial count (as a prop) is passed in
