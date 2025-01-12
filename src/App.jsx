
import './App.css'
import Layout from './Layout'
import Signin from './pages/auth/Signin'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import Signup from './pages/auth/Signup'
import CreateProfile from './pages/profile/CreateProfile'
import Protectedroute from './components/Protectedroute'
import EditProfile from './pages/profile/EditProfile'
import CreateService from './pages/profile/CreateService'
import UserProfile from './pages/profile/UserProfile'
import UserProfileSidebar from './components/UserProfileSidebar'
import Bookings from './pages/profile/Bookings'

function App() {
  return (


    <Routes>

      <Route path='/' element={<Layout />}>

        <Route index element={<Dashboard />} />
        <Route element={<Protectedroute />}>

          <Route path='/userProfile' element={<UserProfileSidebar />}>
            <Route index element={<UserProfile />} />
            <Route path='bookings' element={<Bookings/>} />
          </Route>
          
          <Route path='/createProfile' element={<CreateProfile />} />
          <Route path='/editProfile' element={<EditProfile />} />
          <Route path='/createService' element={<CreateService />} />
        </Route>

      </Route>
      <Route path='/login' element={<Signin />} />
      <Route path='/signup' element={<Signup />} />

    </Routes>


  )
}

export default App
