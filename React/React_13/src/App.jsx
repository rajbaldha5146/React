import { useState, useEffect, useRef } from 'react'
import './App.css'

function App() {

  const [count, setCount] = useState(0);
  let val = useRef(0);

  let btnRef = useRef();

  function increamentHandler(){
    setCount(count+1);
    val.current=val.current+1;
    console.log('Value of val :',val.current);
  }

  function changeColour(){
    btnRef.current.style.backgroundColor = "red";
  }

  useEffect(() => {
    console.log('me rendar ho gaya')
  })
  

  return (
    <div>
      <button
      ref={btnRef} 
      onClick={increamentHandler}>
        Increment
      </button>
      <br/>
      <br/>
      <button onClick={changeColour}>
        Change Colour
      </button>
      <br/>
      <br/>
      <div>
        Count : {count}
      </div>
    </div>
  )
}

export default App
