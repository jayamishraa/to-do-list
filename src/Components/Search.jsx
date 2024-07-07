import React, { useState } from 'react'

const Search = ({setSearchTask}) => {
    // const [searchTask, setSearchTask] = useState('')
  return (
    <div>
      <input 
        type="text" 
        placeholder="Search Task" 
        onChange={(e)=>setSearchTask(e.target.value)}
      />
      {/* <button onClick={()=>handleSearch(searchTask)}>Search</button> */}
    </div>
  )
}

export default Search
