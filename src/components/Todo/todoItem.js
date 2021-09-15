import React from 'react'

const TodoItem = props => {
  return (
    <div className={`card${props.element.isCompleted ? ' completed' : '' }`} key={props.element.id} onClick={() => props.markClicked(props.element.id)}>
      <button className={`${props.element.isCompleted ? 'checked' : '' }`}></button>
      <h2>{props.element.title}</h2>
    </div>
  )
}

export default TodoItem