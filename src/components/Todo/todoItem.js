import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const TodoItem = props => {
  return (
    <div className={`card${props.element.isCompleted ? ' completed' : '' }`} >
      <div className="card-content">
        <span className={`check-button${props.element.isCompleted ? ' checked' : '' }`} onClick={() => props.markClicked(props.element.id)}></span>
        <h2>{props.element.title}</h2>
      </div>
      <div className="action-buttons">
        <span className="button edit-button" onClick={() => props.editItem(props.element.id)}>
          <FontAwesomeIcon icon="edit" />
        </span>
        <span className="button remove-button" onClick={() => props.removeHandler(props.element.id)}>
          <FontAwesomeIcon icon="trash-alt" />
        </span>
      </div>
    </div>
  )
}

export default TodoItem