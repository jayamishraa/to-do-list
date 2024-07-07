import React, { useState } from 'react'
import AddTask from './Components/AddTask'
import Tasks from './Components/Tasks'
import Search from './Components/Search'
import { nanoid } from 'nanoid'

function App() {
  const [tasksList, setTasksList] = useState([
    { id: nanoid(), body: 'Dummy Task1' },
    { id: nanoid(), body: 'Dummy Task2' },
    { id: nanoid(), body: 'Dummy Task3' },
    { id: nanoid(), body: 'Dummy Task4' },
    { id: nanoid(), body: 'Dummy Task5' },
  ])
  const [addTask, setAddTask] = useState('')
  const [searchTask, setSearchTask] = useState('')

  const handleDelete = (id) =>{
    const tasksAfterDeletion = tasksList.filter((task)=> task.id != id)
    setTasksList(tasksAfterDeletion)
  }

  // const handleSearch = (body) => {
  //   const searchTask = tasksList.filter((task)=> task.body == body)
  //   setTasksList(searchTask)
  // }

  return (
    <div className="center">
      <div>
        <Search 
          setSearchTask={setSearchTask}
          />
        <AddTask 
          setAddTask={setAddTask} 
          tasksList={tasksList} 
          setTasksList={setTasksList} 
          />
        <Tasks 
          // tasksList={tasksList} 
          handleDelete={handleDelete}
          tasksList={tasksList.filter(task=> task.body.toLocaleLowerCase().includes(searchTask))}
        />
      </div>
    </div>
  )
}

export default App
