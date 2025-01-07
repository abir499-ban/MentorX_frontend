
import './App.css'
import Layout from './Layout'
import Signin from './pages/auth/Signin'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import Signup from './pages/auth/Signup'

function App() {
  return (


    <Routes>

      <Route path='/' element={<Layout />}>

        <Route index element={<Dashboard />} />

      </Route>
      <Route path='/login' element={<Signin />} />
      <Route path='/signup' element={<Signup />} />


    </Routes>


  )
}

export default App
