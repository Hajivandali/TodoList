import { useState } from "react";
import TodoList from "./TodoList";
import { v4 as uuidv4 } from "uuid";

export default function Todos() {
  //initial todos state

  const [todos, setTodos] = useState([
    {
      id: uuidv4(),
      title: "go to the gym ",
      status: false,
    },
    {
      id: uuidv4(),
      title: "go to the Sleep",
      status: true,
    },
    {
      id: uuidv4(),
      title: "work Out at Home ",
      status: true,
    },
  ]);

  //new state for input

  // you don't use this function, delete it
  const onInputNewTodoChangeHandler = (event) => {
    setNewTodoTitle(event.target.value);
  };

  const addNewTodoHandler = (event) => {
    if (event.key === "Enter") {
      console.log("add new todo");
      setTodos([
        {
          id: uuidv4(),
          title: event.target.value,
          status: false,
        },
        ...todos,
      ]);

      // this is wrong
      event.target.value = "";
    }
  };

  const deleteTodoHandler = (todoData) => {
    console.log("delete todo", todoData);
    let newTodos = todos.filter((todoItem) => {
      return todoData.id != todoItem.id;
    });

    console.log(newTodos);
    setTodos(newTodos);
  };

  const toggleTodoStatusHandler = (todoData) => {
    console.log("toggle befor click", todoData);

    // change status for TodoListItem
    let newTodos = todos.map((todoItem) => {
      if (todoData.id == todoItem.id) {
        todoItem.status = !todoItem.status;
      }

      return todoItem;
    });
    // Update State
    setTodos(newTodos);
    console.log("toggle Status is chenged", todoData);
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="w-full px-4 py-8 mx-auto shadow lg:w-1/3  bg-white">
        <div className="flex items-center mb-6">
          <h1 className="mr-6 text-4xl font-bold text-purple-600">
            {" "}
            TO DO APP
          </h1>
        </div>
        <div className="relative">
          <input
            type="text"
            placeholder="What needs to be done today?"
            onKeyDown={addNewTodoHandler}
            className="w-full px-2 py-3 border rounded outline-none border-grey-600"
          />
        </div>

        <TodoList
          todos={todos}
          deleteTodo={deleteTodoHandler}
          toggle={toggleTodoStatusHandler}
        />
      </div>
    </div>
  );
}
