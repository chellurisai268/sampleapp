import React, { useState } from "react";
import Child from "./child";
function Parent(){
  var [fn,setfn]=useState("subbu")
  function xyz(){
    alert("this is parent xyz function")
  }
    return(
        <div className="border border-2 border-info p-2 m-2">
          <h1>parent:{fn}</h1>
          <button onClick={()=>{xyz()}}>call xyz</button>
          <Child x={fn} y={xyz}></Child>
         
            </div>
    )
}
export default Parent