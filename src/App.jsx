import React, { useState } from 'react'
import Search from './Components/Search'
import Tasks from './Components/Tasks'

function App() {
  const [tasksList, setTasksList] = useState([
    { id: 1, body: 'hello' }
  ])
  const [addTask, setAddTask] = useState('')

  return (
    <div className="center">
      <div>
        <Search setAddTask={setAddTask} tasksList={tasksList} setTasksList={setTasksList} />
        <Tasks tasksList={tasksList} />
      </div>
    </div>
  )
}

export default App
