import React from 'react'

const TodoItem = props => {
  return (
    <div className={`card${props.element.isCompleted ? ' completed' : '' }`} key={props.element.id}>
      <h2>{props.element.title}</h2>
      <div className="buttons">
        <button onClick={() => props.markClicked(props.element.id)}>Zakończone</button>
        {/* <button onClick={() => props.markUnclicked(props.element.id)}>odznacz</button> */}
      </div>
    </div>
  )
}

export default TodoItem