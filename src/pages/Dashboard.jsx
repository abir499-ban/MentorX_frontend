import React, { useContext, useEffect, useState } from 'react'
import AuthContext from '../context/Authcontext'

const Dashboard = () => {
  const { user } = useContext(AuthContext)
  return (
    <>
      <div>
        <h1>Hello</h1>
        {user && (
          <p>Name :{user.email}</p>
          )}
      </div>
    </>
  )
}

export default Dashboard