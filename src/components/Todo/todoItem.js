import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const TodoItem = props => {
  const title = props.task.title;
  const done = props.task.isCompleted;
  
  return (
    <div className={`card${done ? ' completed' : '' }`} >
      <div className="card-content">
        <span className={`check-button${done ? ' checked' : '' }`} onClick={() => props.markClicked(props.task.id)}></span>
        <h2>{title}</h2>
      </div>
      <div className="action-buttons">
        <span className="button edit-button" onClick={() => props.editHandler(props.task.id, title)}>
          <FontAwesomeIcon icon="edit" />
        </span>
        <span className="button remove-button" onClick={() => props.removeHandler(props.task.id)}>
          <FontAwesomeIcon icon="trash-alt" />
        </span>
      </div>
    </div>
  )
}

export default TodoItem;