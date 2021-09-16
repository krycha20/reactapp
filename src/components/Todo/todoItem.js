import React from 'react'

const TodoItem = props => {
  return (
    <div className={`card${props.element.isCompleted ? ' completed' : '' }`} >
      <span className={`check-button${props.element.isCompleted ? ' checked' : '' }`} onClick={() => props.markClicked(props.element.id)}></span>
      <h2>{props.element.title}</h2>
      <span className="remove-button" onClick={() => props.removeHandler(props.element.id)}></span>
    </div>
  )
}

export default TodoItem