import React from "react";
import { useState } from "react";
import { nanoid } from "nanoid";

const Main = () => {
  const [todos, settodos] = useState([]);
  const [input, setinput] = useState("");

  const handleChange = (e) => {
    e.preventDefault();
    setinput(e.target.value);
  };

  const handleAddTodos = () => {
    settodos([...todos, { id: nanoid(), title: input }]);
    setinput("");
  };

  const handleDelete = (id) => {
    const newTodo = todos.filter((ele) => ele.id !== id);
    settodos(newTodo);
  };

  return (
    <>
      <h1>To-Do App</h1>
      <div>
        <input
          type="text"
          placeholder="Enter Your Task...."
          required
          value={input}
          onChange={handleChange}
        />
        <button type="submit" onClick={handleAddTodos}>
          Add
        </button>
      </div>

      <div className="toDo-body">
        <ul>
          {todos.map((ele) => {
            return (
              <li key={ele.id}>
                {ele.title}{" "}
                <button onClick={() => handleDelete(ele.id)}>Delete</button>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default Main;
