import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import gil from './assets/gil.jpeg';
import virat from './assets/virat.jpg';
import rohit from './assets/rohit.jpg';
import './App.css'
import UserCard from './components/UserCard'

function App() {
  return (
   <div className="container">
    <UserCard name="Shubhaman Gill" im={gil} des="A talented cricketer." style={{"border-radius":"10px"}} />
    <UserCard name="Virat Kohli" im={virat} des="GOAT of cricket" style={{"border-radius":"10px"}} />
    <UserCard name="Rohit sharma" im={rohit} des="The current captain." style={{"border-radius":"10px"}} />
   </div>
  )
}

export default App
