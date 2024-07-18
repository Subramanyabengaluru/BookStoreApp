import React from 'react'
import Home from './Home/Home'
import Course from './Components/Course'
import { Route, Routes, Navigate } from "react-router-dom"
import Cources from './cources/Cources'
import Signup from './Components/Signup'
import Contact from './Components/Contact'
import About from './Components/About'
import { Toaster } from 'react-hot-toast'
import { useAuth } from './context/AuthProvider';

function App() {
  const [authUser, setAuthUser] = useAuth();
  return (
    <>
      {/* <Home/>
    <Course/> */}

      <div className="dark:bg-slate-900 dark:text-white">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/course"
            element={authUser ? <Course /> : <Navigate to="/signup" />}
          />
          <Route path='/contact' element={<Contact/>} />
          <Route path='/about' element={<About/>} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
        <Toaster />
      </div>
    </>
  )
}

export default App
