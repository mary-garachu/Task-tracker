import React from 'react'
import {FaTimes} from 'react-icons/fa'

const Task = ({task, onDelete, onDoubleClick}) => {
  return (
    <div className='task'>
      <h4 className='task-icon'>{task.text} <FaTimes style={{color:'red', cursor:'pointer'}} onClick = {() => onDelete(task.id)} /></h4>
      <p>{task.day}</p>
      <p >{task.reminder}</p>
    </div>
  )
}

export default Task
