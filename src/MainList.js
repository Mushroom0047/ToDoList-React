import React, { useState } from 'react'
import { TodoList } from './component/TodoList';

export const MainList = () => {
const [task, setTask] = useState(['tarea1', 'tarea 2']);
const [inputValue, setInputValue] = useState('');

const handleInput = (e) => {
  setInputValue(e.target.value)
}

const handleSubmit = (e) => {
  e.preventDefault();
  if(inputValue.trim().length > 2){
    setTask([...task, inputValue]);
    setInputValue('');
  }
}

  return (
    <>
        <h1>To-Do List</h1>
        <hr/>
        <div className='box'>       
        <form onSubmit={handleSubmit}>
            <input   
            onChange={handleInput}          
            className='task__input'
            type='text'    
            placeholder='Agrega una tarea !'          
            />            
        </form>         
            {
                task.map((t) => {
                    return <TodoList key={t} task={t}/>
                })
            }
        </div>
    </>
  )
}
