import { useState } from "react";

const Search = ({ todos, settodos }) => {
  const [searchTodo, setsearchTodo] = useState("");



// Function to handle searching of todos form existing todos.....................................

  const handleSearch = (e) => {
    const matchedTodo = todos.filter((ele) => {
        setsearchTodo(e.target.value);
      return ele.title.toLowerCase().includes(e.target.value.toLowerCase());
    });
    settodos(matchedTodo);
    
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
