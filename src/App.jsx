   
   
import { useEffect, useState } from "react"
import "./style.css"
import { NewTodoForm } from "./NewTodoForm"
import { TodoList } from "./TodoList"
  

  



export default function App () {
  
  const[todos,setTodos]=useState(()=>{
    const localvalue=localStorage.getItem("ITEM")
    if (localvalue==null) return []
    return JSON.parse(localvalue)
  })
  useEffect(() => {
    localStorage.setItem("ITEM",JSON.stringify(todos))

  }),[todos]
  function addTodo(title) {
     setTodos (currentTodos=> {
          return [
            ...currentTodos,{id:crypto.randomUUID(),title,completed:false
    
            },
          ]
    
        })
  }

  function toggleTodo(id,completed) {
    setTodos(currentTodos=> {
      return currentTodos.map(todo=> {
        if(todo.id==id){
         
          return {...todo,completed }
          }
          return todo
        })
      })
    }
    function DeleteTodo(id) {
      setTodos(currentTodos=>{
        return currentTodos.filter(todo=>todo.id !==id)
      })
    }
 
  return <>
  <NewTodoForm onSubmit={addTodo}/>
  
    <p className="header">To Do list </p>
    <TodoList todos={todos} toggleTodo={toggleTodo} DeleteTodo={DeleteTodo} />



    
  </>

}

