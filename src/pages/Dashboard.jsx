import React, { useContext, useEffect, useState } from 'react'
import AuthContext from '../context/Authcontext'
import MentorProfileCard from '../components/MentorProfileCard'

const Dashboard = () => {
  const iter = Array(4).fill('')
  const { user } = useContext(AuthContext)
  return (
    <>
      {/* <div>
        {user && (
          <p>Name :{user.email}</p>
        )}
      </div> */}
      <div className='mx-0 px-11 text-center py-6 w-full h-96' style={{ backgroundColor: '#fce2dc' }}>
        <p className='font-gilroy text-5xl font-extrabold pt-10'>Reach your career goals faster</p>
        <p className='font-gilroy text-xl p-5'>With instant access to the best people from top companies & domains</p>
      </div>
      {/* <div className="px-4 mx-20 py-2 my-6 flex flex-row gap-4">
        {iter.map((option, index) => (
          <div key={index}>
            <MentorProfileCard />
          </div>
        ))}
      </div> */}

    </>
  )
}

export default Dashboard