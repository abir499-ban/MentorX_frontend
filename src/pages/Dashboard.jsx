import React, { useContext, useEffect, useState } from 'react'
import AuthContext from '../context/Authcontext'
import MentorProfileCard from '../components/MentorProfileCard'

const Dashboard = () => {
  const iter = Array(4).fill('')
  const { user } = useContext(AuthContext)
  return (
    <>
      <div>
        <h1>Hello</h1>
        {user && (
          <p>Name :{user.email}</p>
        )}
      </div>

      <div className="px-4 mx-20 py-2 my-6 flex flex-row gap-4">
        {iter.map((option, index) => (
          <div key={index}>
            <MentorProfileCard />
          </div>
        ))}
      </div>

    </>
  )
}

export default Dashboard