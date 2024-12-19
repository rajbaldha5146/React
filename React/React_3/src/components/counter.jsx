import React, { useState } from 'react'
import './counter.css'

const counter = () => {
    const [Count,setCount] = useState(0);
  return (
    <div className="counter-container">
        <p id="para">
            You Have Clicked {Count} Times
        </p>
        <button id="btn" onClick={()=>{setCount(Count+1)}}>
           Clicked Me 
        </button>
    </div>
  )
}

export default counter
