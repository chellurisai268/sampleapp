import logo from './logo.svg';
import './App.css';
import Counter from './components';
import Todolist from './todolist';
import Parent from './parentcomponent';
import GrandChild from './grandchild';
import { useState } from 'react';
import { MyContext } from './myContext';
const Mydetails={
  firstname:"subbu",
  age:22,
  place:"velangi"
}

function App() {
  var [fn,setfn]=useState("Edupoly")
  return (
   <MyContext.Provider value={"code your career"}>
    <div className="border border-2 border-primary p-2 m-2">
      {/* <Counter></Counter> 
      <Todolist></Todolist> */}
      <h1>App:{fn}</h1>
      <Parent></Parent>
      
    </div>
    </MyContext.Provider>
  );
}

export default App;
