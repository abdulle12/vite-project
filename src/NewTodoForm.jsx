import { useState } from "react"
export function NewTodoForm({onSubmit}){
    onSubmit
    const [newItem,setNewItem]=useState('')
    function handleSubmit (e){
        e.preventDefault()
        if (newItem === '') return

        onSubmit(newItem)
       
    
       
        setNewItem('')
    
      }
    return  <form onSubmit={handleSubmit}  className="form">
    <div className="form-row">
      <label htmlFor="item" className="header">New item</label >
      <input value={newItem}  onChange={e=> setNewItem(e.target.value)}
      type="text" id="item" placeholder="create your to do list" className="input" />
    </div>
    <button className="btn">Add</button>
  
  </form>
}