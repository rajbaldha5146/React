import React from 'react'
import './UserCard.css'

const UserCard = (props) => {
  return (
    <div className="user-container" style={props.style}>
        <p id="user-name">{props.name}</p>
        <img id="user-img" src={props.im} alt={props.name}></img>
        <p id="user-description">{props.des}</p>
    </div>
  )
}

export default UserCard
