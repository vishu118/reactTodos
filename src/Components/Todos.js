import React from 'react'

export default function Todos({todos,handleDelete,handleEdit}) {
    
  return (
    <div className="toDo-body">
    <ul>
      {todos.map((ele) => {
        return (
          <li key={ele.id} className="list">
            {ele.title}
            <div>

            <button onClick={() => handleDelete(ele.id)} className="button">Delete</button>
            <button  className="button" onClick = {()=>handleEdit(ele.id)}>Edit</button>
            </div>
          </li>
        );
      })}
    </ul>
  </div>
  )
}
