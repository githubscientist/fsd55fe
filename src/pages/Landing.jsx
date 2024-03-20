import React from 'react'
import { Outlet } from 'react-router-dom'

const Landing = () => {

  return (
    <div>
      <h1>Job Portal</h1>
      <p>Welcome to the Job Portal</p>
      <p>You can search for jobs here. Register and login to apply for jobs.</p>

      <Outlet />
    </div>
  )
}

export default Landing