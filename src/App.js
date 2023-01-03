import './App.css';
import Header from './components/header';
import { useEffect, useState } from 'react';
import Addtodo from './components/Addtodo';
import List from './components/List';

function App() {
const [todo,setTodo]=useState([])
const [select, setSelect]=useState('all')

  const addTodo = (value)=> {
    setTodo([...todo, {
      id: Date.now(),
      title: value,
      status: false
    }]);
  }
  useEffect(() => {
    filterTodos()
  }, [todo])

  function filterTodos () {
    const activeTodo = todo.filter(item => item.status === false)
    const comleteTodo = todo.filter(item => item.status === true)
    setTodo([...activeTodo, ...comleteTodo])
  }
  const deleteItem=(id)=>{
    const newArr = todo.filter((item)=>item.id !==id)
    setTodo(newArr)
  }
const changActiv=(id)=>{
  const newArr= todo.map(item=>item.id===id ? {...item, status: !item.status} : item)
  setTodo(newArr)
}
  return (
    <div className="App">
     <Header select={select} setSelect={setSelect} todo={todo} filterTodos={filterTodos}/>
     <Addtodo addTodo={addTodo}/>
     <List select={select} todo={todo} deleteItem={deleteItem}  changActiv={changActiv}/>
    </div>
  );
}

export default App;
