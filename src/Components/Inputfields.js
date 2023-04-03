import React from "react";

const Inputfields = ({ handleChange, handleAddTodos, input, setinput }) => {
  return (
    <div className="inputfield">
      <input
        type="text"
        placeholder="Enter Your Task...."
        required
        value={input}
        onChange={handleChange}
      />
      <button type="submit" onClick={handleAddTodos} className="btn">
        Add
      </button>
    </div>
  );
};

export default Inputfields;
