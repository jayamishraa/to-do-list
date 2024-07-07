import React from 'react'

const Item = ({id, body, handleDelete}) => {
  return (
    <div className='item'> 
      <span>{body}</span>
      <input type="checkbox" />
      <i className="fa-solid fa-trash" onClick={()=>handleDelete(id)}></i>
    </div>
  )
}

export default Item
