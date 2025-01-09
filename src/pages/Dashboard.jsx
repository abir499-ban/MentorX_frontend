import React, { useContext, useEffect, useState } from 'react'
import AuthContext from '../context/Authcontext'

const Dashboard = () => {
  const {user}  = useContext(AuthContext)
  useEffect(()=>{
    console.table(user)
  }, [])
  return (
    <>
    <div>
      <h1>Hello</h1>
      <p>Name : {user.email}</p>
    </div>
    </>
  )
}

export default Dashboard