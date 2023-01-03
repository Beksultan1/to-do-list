import React from 'react';

const Header = ({select, setSelect,todo}) => {

    const activeTodo = todo.filter(item => item.status === false)
    const comleteTodo = todo.filter(item => item.status === true)

    return (
        <div className='header'>
            <h1>Todo list:{todo.length}</h1>
            <h2>done:{comleteTodo.length}</h2>
            <h2>not done: {activeTodo.length}</h2>
            <select value={select} onChange={(e) => setSelect(e.target.value)} >
                <option value="all">all</option>  
                <option value="done">done</option> 
                <option value="not done">not done</option>       
            </select>
        </div>
    );
};

export default Header;