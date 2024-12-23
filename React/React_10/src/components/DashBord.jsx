import React from 'react'
import { Outlet } from 'react-router-dom'

const DashBord = () => {
  return (
    <div>
      Dashboard page
      <Outlet />
    </div>
  )
}

export default DashBord
