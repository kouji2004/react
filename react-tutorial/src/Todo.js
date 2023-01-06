import React from 'react'

export const Todo = ({todo}) => {
  return (
    <div>
      <label>
        <input type="checkbox"></input>
      </label>
      {todo.name}
      </div>
  )
};


export default Todo;