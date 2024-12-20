import { useState } from 'react'
import Card from './Components/Card'
import './App.css'

function App() {

  //create state
  //manage state
  //change state to
  //sabhi child me state ko sync karwadunga

  const [name, setName] = useState('');

  return (
   <div>
      <Card tital="Card1" name={name} setName={setName}/> 
      <Card tital="Card2" name={name} setName={setName}/> 
      {/* <p>I Am Inside Parent Components And Value Of Name Is {name}</p> */}
   </div>
  )
}

export default App
