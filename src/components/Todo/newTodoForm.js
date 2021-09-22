import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const NewTodoForm = ({onChange, inputValue, onSubmit, onKeyPress}) => {

  return (
    <div className="card">
      <input 
        type="text" 
        placeholder="Enter the name of the task" 
        value={inputValue} 
        onChange={onChange} 
        onKeyDown={onKeyPress}
      />
      <button className="add-button" onClick={onSubmit}>
        <FontAwesomeIcon icon="plus-square" />
      </button>
    </div>
  )
}

export default NewTodoForm;