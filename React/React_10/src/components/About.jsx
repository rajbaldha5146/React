import React from 'react'
import { useNavigate } from 'react-router-dom'

const About = () => {

    const navigate = useNavigate();
    function handleClick(){
        navigate('/dashbord');
    }
  return (
    <div>
      About Page
      <button onClick={handleClick}>
        Move To Dashbord Page
      </button>
    </div>
  )
}

export default About
