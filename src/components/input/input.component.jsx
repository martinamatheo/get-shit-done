import React from 'react';

import './input.styles.scss';

const Input = props => {
  const { isEditing, input, onChange } = props
  if (isEditing) {
    return(
      <div className="todo-input-wrap" >
        <input placeholder="Press enter to save a task" className="todo-input" value={input} onChange={(e) => onChange(e)} />
      </div> 
    ) 
  } else {
    return false
  }
}

export default Input;
