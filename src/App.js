import logo from './logo.svg';
import './App.css';
import Header from './MyComponents/Header';
import {Todos} from './MyComponents/Todos';
import {Footer} from './MyComponents/Footer';
import {AddTodo} from './MyComponents/AddTodo';

import React , {useState} from 'react';


function App() {
 const onDelete=(todo)=>{
   console.log("I am delete of todo",todo);
   setTodos(todos.filter((e)=>{
     return e!==todo;
   }
   ));

  }
  const addTodo=(title,desc) =>
  {
    console.log("I am adding this todo" ,title,desc)
    let sno= todos[todos.length-1].sno +1
    const myTodo={
      sno:sno,
      title:title,
      desc :desc,
    }
    setTodos([...todos,myTodo]);
    console.log(myTodo);
    
  }
  const [todos,setTodos]=useState([

    {
      Sno:1,
      title:"Tarkari Kinnu",
      desc :"Tarkari kinnu parcha , yo kam saknalai"
    },
    {
      Sno:2,
      title:"Kapada dhunu",
      desc :"kapada dhunu parcha , yo kam saknalai"
    },
    {
      Sno:3,
      title:"pocha lagaunu",
      desc :"pocha lagauna parcha, yo kam saknalai"
    },
  ]);
  return (
   <>
   <Header title="My Todos List" Hide={true}/>
   <AddTodo addTodo={addTodo}/>
   <Todos todos={todos} onDelete={onDelete}/>
   <Footer/>
</>
  );
}

export default App;
