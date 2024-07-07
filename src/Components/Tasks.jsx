import React from 'react'
import Item from './Item'

const Tasks = ({ tasksList, handleDelete }) => {
  return (
    <div>
      {tasksList.map((task) => (
        <Item 
          key={task.id} 
          id={task.id} 
          body={task.body}
          handleDelete={handleDelete} 
        />
      ))}
    </div>
  )
}

export default Tasks
