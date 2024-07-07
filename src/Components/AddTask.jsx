import { nanoid } from 'nanoid'
import React, { useState } from 'react'

const AddTask = ({ setAddTask, tasksList, setTasksList }) => {
  const [newTask, setNewTask] = useState('')

  const handleAddTask = () => {
    if (newTask.trim() === '') return
    const taskToAdd = {
      id: nanoid(),
      body: newTask
    }
    setAddTask(newTask.trim())
    setTasksList([...tasksList, taskToAdd])
    setNewTask('') 
  }

  return (
    <div>
      <h1> To-Do List </h1>
      <input 
        type='text'
        value={newTask}
        placeholder='Add Task'
        onChange={e => setNewTask(e.target.value)}
      />
      <button onClick={handleAddTask}>Add Task</button>
    </div>
  )
}

export default AddTask
