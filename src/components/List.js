import React, { useState } from 'react';

const List = ({ todo, deleteItem, changActiv, select }) => {
    console.log(select)
    return (
        <div className='list'>
            {
                todo.filter(item => {
                    if (select === 'all') {
                        return true
                    }
                    else if (select === 'done') {
                        return item.status
                    }
                    else if (select === 'not done') {
                        return !item.status
                    }
                }).map((item, index) => (
                    <div>
                        <span>{index + 1}</span>
                        <input type="checkbox" checked={item.status} onClick={() => changActiv(item.id)} />
                        <div key={item.id}>{item.title}</div>
                        <button style={{ display: item.status === true ? 'block' : "none" }} onClick={() => deleteItem(item.id)}>delete</button>
                    </div>
                ))
            }
        </div>
    );
};

export default List;