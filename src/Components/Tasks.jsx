import React from 'react'
import Item from './Item'

const Tasks = ({ tasksList }) => {
  return (
    <div>
      {tasksList.map((task) => (
        <Item 
            key={task.id} 
            id={task.id} 
            body={task.body} 
        />
      ))}
    </div>
  )
}

export default Tasks
