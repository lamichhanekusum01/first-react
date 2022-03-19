import React, { useState } from 'react'

export const AddTodo = ({addTodo}) => {
    const[title,setTitle]=useState("");
    const[desc,setDesc]=useState("");

    const submit = (e)=>
    {
        e.preventDefault();
        if(!title|| !desc)
        {
            alert("Title or description cannot be blank")
        }
        addTodo(title,desc)
    }
  return (
    <div className='container my-3'>
        <h3>Add a Todo</h3>
        <form onSubmit={submit}>
    <div class="form-group">
      <label HtmlFor="title">Todo Title</label>
      <input type="text" value={title} className="form-control"onChange={(e)=>{setTitle(e.target.value)}} id="title"  placeholder="Enter Todo Item"/>
      {/* <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small> */}
    </div>
    <div class="form-group">
      <label HtmlFor="desc">Description</label>
      <input type="text" value={desc} onChange={(e)=>{setDesc(e.target.value)}}  className="form-control" id="exampleInputPassword1" placeholder="Todo Desc"/>
    </div>
    <div><br/>
    <button type="submit" className="btn btn-sm btn-success">Add Todo</button>
    </div>
  </form></div>
  )
}
