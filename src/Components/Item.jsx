import React from 'react'

const Item = ({id, body}) => {
  return (
    <div className='item'> 
      <span>{body}</span>
      <input type="checkbox" />
      <i className="fa-solid fa-trash"></i>
    </div>
  )
}

export default Item
