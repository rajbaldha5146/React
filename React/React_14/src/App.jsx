import { useState, useMemo } from 'react'
import './App.css'

function App() {

  const [count, setCount] = useState(0);
  const [input, setInput] = useState(0);

  function handler(){
    setCount(count+1);
  }

  function expensiveTask(num){
    console.log("inside expensiveTask");
    for (let i = 0; i < 1000000000; i++) {}
      return num*2;
  }

  let doubleValue =  useMemo(() => expensiveTask(input), [input]);

 

  return (
    <div>
    <button onClick={handler}>
      Increment
    </button>
    <br/>
    <div>
      Count : {count}
    </div>
    <input
      type='number'
      placeholder='Enter Number'
      value={input}
      onChange={(e)=>setInput(e.target.value)}
    />
    <div>
      Double Value : {doubleValue}
    </div>
   </div>
  )
}

export default App
