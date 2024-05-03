import React,{useEffect,useRef} from "react";
function Todolist(){
  var tref=useRef()
  useEffect(()=>{
    tref.current.focus()
  },[])
    var[todo,setTodo]= React.useState(["sai","anil"])
    var[a,setA]=React.useState("")
    function abc(){
        var a=document.getElementById('cd').value
        setTodo([...todo,a])
    }
    function xyz(i){
     var del=[...todo] 
     del.splice(i,1)
     setTodo(del) 

    }
  return <div className='border border-2 m-2 p-2 border-warning'>
        <h1>Todolist</h1>
        <input ref={tref} type="text" id="cd"/>
        <button onClick={()=>{abc()}}> Add</button>
        <h1>{todo.map((k,i)=>{
            return <li className='p-2 m-2 bg-primary d-flex justify-content-between'>{k}
            <button onClick={()=>{xyz(i)}}><i class="bi bi-trash3"></i></button>
           </li>
        })}</h1>
  </div>  
}
export default Todolist