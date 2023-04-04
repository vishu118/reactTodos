// import { useState } from "react";

const Search = ({ todos, settodos,searchTodo, setsearchTodo }) => {
  // const [searchTodo, setsearchTodo] = useState("");



// Function to handle searching of todos form existing todos.....................................

  const handleSearch = (e) => {
    setsearchTodo(e.target.value)
    const matchedTodo = todos.filter((ele) => {
      return ele.title.toLowerCase().includes(e.target.value.toLowerCase());
    });

    // setsearchTodo(e.target.value)
    console.log(matchedTodo)
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
