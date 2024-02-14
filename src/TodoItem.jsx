export function TodoItem({completed,id,title,toggleTodo,DeleteTodo}){
    return <li  className="list">
    <label htmlFor="">
      <input type="checkbox" checked={completed}
       onChange={e=>toggleTodo(id,e.target.checked)}
      
      />
     {title}
    </label>
    <button onClick={()=>DeleteTodo(id)} 
    className="btn2">Delete</button>
  </li>
}