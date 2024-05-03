import React, { useContext } from "react";
import GrandGrandChild from "./grandgrandchild";
import { MyContext } from "./myContext";
function GrandChild(){
   var b=useContext(MyContext)
    return (
        <div className="border border-2 border-danger p-2 m-2">
            <h1>GrandChild,{b}</h1>
            <GrandGrandChild></GrandGrandChild>
        </div>
    )
}
export default GrandChild