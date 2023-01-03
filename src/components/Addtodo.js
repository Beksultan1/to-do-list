import React, { useState } from 'react';

const Addtodo = ({ addTodo }) => {
  const [value, setValue] = useState('')

  const saveTodo = () => {
    addTodo(value)
    setValue('')
  }
  return (
    <div className='add'>
      <input type="text"
        placeholder='text'
        name='todo'
        value={value}
        onChange={(e) => {
          setValue(e.target.value)
        }}
      />
      <button onClick={saveTodo}>add</button>
    </div>
  );
};

export default Addtodo;