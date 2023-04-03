import { useState } from "react";

const Search = ({ todos, settodos }) => {
  const [searchTodo, setsearchTodo] = useState("");



// Function to handle searching of todos form existing todos.....................................

  const handleSearch = (e) => {
    const matchedTodo = todos.filter((ele) => {
      return ele.title.toLowerCase().includes(e.target.value.toLowerCase());
    });
    settodos(matchedTodo);
    setsearchTodo(e.target.value);
  };

  return (
    <div className="Search">
      <i className="fa-solid fa-magnifying-glass"></i>
      <input
        className="Search"
        type="text"
        placeholder="Search"
        value={searchTodo}
        onChange={handleSearch}
      />
    </div>
  );
};

export default Search;
