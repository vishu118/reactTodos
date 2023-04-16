import React from "react";
import { useState,useEffect } from "react";
import { nanoid } from "nanoid";
import Search from "./Search";
import Todos from "./Todos";
import Inputfields from "./Inputfields";

const Main = () => {

  

const [todos, settodos] = useState(getData());
const [searchedTodo,setSearchedTodo] = useState([]);
const [input, setinput] = useState("");
const [editItem ,seteditItem ] = useState(null)
const [searchTodo, setsearchTodo] = useState("");


// To get data from local storage.

function getData(){
  let list = localStorage.getItem('Lists')
   if(list){
    return JSON.parse(localStorage.getItem('Lists'))
   }else{
    return [];
   }
}

// Add Data To local storage ============================
useEffect(()=>{
  localStorage.setItem('Lists' , JSON.stringify(todos) )
},[todos])

// function to handle every change in inputfields..................
  const handleChange = (e) => {
    e.preventDefault();
    setinput(e.target.value);
  };


// Function to add todos ....................................  
  const handleAddTodos = () => {
    if (input.trim().length > 0) {
      settodos([...todos, { id: nanoid(), title: input }]);
    }
    setinput("");
  };


//  Function to apply delete feature  ............................
  const handleDelete = (id) => {
    const newTodo = todos.filter((ele) => ele.id !== id);
    settodos(newTodo);
  };


// Function to Edit item.....................................
const handleEdit = (id)=>{
    const editItem = todos.find((ele)=>{
      return ele.id === id
    })
    setinput(editItem.title)
    seteditItem(id)
    const newTodo = todos.filter((ele) => ele.id !== id);
    settodos(newTodo);

}
  return (
    <div className="container">
      <h1>To-Do App</h1>
      <Search 
        todos={todos} 
        settodos={setSearchedTodo}
        searchTodo={searchTodo}
        setsearchTodo={setsearchTodo} />

      <Inputfields
        handleChange={handleChange}
        handleAddTodos={handleAddTodos}
        input ={input}
        setinput = {setinput}
      />

      <Todos 
        todos={searchTodo === "" ? todos : searchedTodo} 
        handleDelete={handleDelete} input={input}
        handleEdit = {handleEdit} />
    </div>
  );
};

export default Main;
