import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const NewTodoForm = (props) => {
  return (
    <div className="card">
      <input 
        type="text" 
        placeholder="Enter the name of the task" 
        value={props.inputValue} 
        onChange={props.onChange} 
      />
      <button className="add-button" onClick={props.onSubmit}>
        <FontAwesomeIcon icon="plus-square" />
      </button>
    </div>
  )
}

export default NewTodoForm;