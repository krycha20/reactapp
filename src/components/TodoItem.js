import React from 'react'

const TodoItem = props => {
  return (
    <div className={`card ${props.element.isCompleted ? completed : '' }`} key={props.element.id}>
      <h2>{props.element.title}</h2>
      <button>Zakończone</button>
    </div>
  )
}

export default TodoItem