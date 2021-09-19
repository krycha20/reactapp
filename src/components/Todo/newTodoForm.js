import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const NewTodoForm = ({onChange, inputValue, onSubmit}) => {
  return (
    <div className="card">
      <input 
        type="text" 
        placeholder="Enter the name of the task" 
        value={inputValue} 
        onChange={onChange} 
      />
      <button className="add-button" onClick={onSubmit}>
        <FontAwesomeIcon icon="plus-square" />
      </button>
    </div>
  )
}

export default NewTodoForm;