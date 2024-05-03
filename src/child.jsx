import React, { useContext, useState } from "react";
import GrandChild from "./grandchild";
import { MyContext } from "./myContext";

function Child(props){
   var a=useContext(MyContext)
    function def(){
        alert("hi")
    }
    return(
        
        <div className="border border-2 border-success p-2 m-2">
            <h1>child:{props.x},{a}</h1>
            <button onClick={()=>{def()}}>call back</button>
            <button class="btn btn-success" onClick={()=>{props.y()}}>call xyz</button>
            <GrandChild></GrandChild>
        </div>
    )
}
export default Child