import React from 'react';

import {ReactComponent as IconCheck} from '../../assets/img/check.svg';
import {ReactComponent as IconCross} from '../../assets/img/cross.svg';

import './list-items.styles.scss';

const ListItems = props => {
  const { items, onClick, onDelete } = props
  if (items.length > 0) {
    return items.map(item => {
      return(
        <span className="list-items-wrap">
          <span className="list-items-content" onClick={() => onClick(item.id)}>
            <input type="checkbox" checked={item.isCompleted} />
            <label for="1" className="todo">
              <IconCheck />
              { item.text }
            </label>
          </span>
      
          <span 
            onClick={() => onDelete(item.id)}
            className="delete-item" 
            title="remove" 
          >
            <IconCross />
          </span> 
        </span> 
      )
    }) 
  } else {
    return(<p className='first-item-call'>Add an item that needs to be done</p>)
  }
}

export default ListItems;
