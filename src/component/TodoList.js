import React from 'react';
import '../component/TodoList.css';

export const TodoList = ({task}) => {
  return (
    <div className='box__task'>
        <p>{task}</p>
        {/* <i className='fas fa-trash-alt' aria-hidden="true"></i> */}
    </div>
  )
}
