import React, { useContext } from 'react'
import AuthContext from '../../context/Authcontext'

const CreateProfile = () => {
  const {user} = useContext(AuthContext)
  return (
   <>
   <div>
        <h1>Hello</h1>
        {user ? (
          <p>This persons profile has to be made :{user.email}</p>
          ) : (
            <p>UNDEFINED</p>
          )}
      </div>
   </>
  )
}

export default CreateProfile