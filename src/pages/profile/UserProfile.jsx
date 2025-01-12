import React, { useEffect } from 'react'
import UserProfileSidebar from '../../components/UserProfileSidebar'

const UserProfile = () => {
  useEffect(() => {
    console.log('UserProfile component mounted');
}, []);

  return (
    <>
    <div>This is User Profile</div>
    </>
  )
}

export default UserProfile