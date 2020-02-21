import React from 'react';
import './add-item.styles.scss';

import {ReactComponent as IconPlus} from '../../assets/img/plus.svg';

const AddItem = props => {
  const { onEditing } = props
  return(
    <div className="add-todo">
      ADD AN ITEM
      <div className="icon-plus" onClick={() => onEditing()}><IconPlus/></div>
    </div>
  )
}

export default AddItem;
