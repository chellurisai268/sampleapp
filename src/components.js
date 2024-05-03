import React,{useEffect} from "react";
function Counter(){
    var [count,setCount]=React.useState(0)
    function inc(){
        setCount(count+1)
    }
    function dec(){
        setCount(count-1)
    }
    useEffect(()=>{
        console.log("use effect with empty dep array")
    },[]);
    useEffect(()=>{
        console.log("use effect with no empty dep array")
    });
    return <div className='border border-2 m-2 p-2 border-info'>
            <h1>counter:{count}</h1>
           <button onClick={()=>{inc()}}>Increment</button>
           <button onClick={()=>{dec()}}>Decrement</button>
            </div>
}
export default Counter