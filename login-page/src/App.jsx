import React from 'react'
import './App.css'
import { Link } from 'react-router-dom'

function App() {
  
  return (
    <>
    <div className="min-h-screen flex items-center justify-center ">
      <h1 className="text-3xl font-bold">Welcome to the Home Page!</h1>
      
      <div className="flex flex-col mx-5 space-x-4 overflow-x-auto md:overflow-x-hidden md:space-x-0 md:grid-cols-12 md:gap-1 ">
        <Link to="/login" className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition duration-300">Login</Link>
        <Link to="/register" className="bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700 transition duration-300">Register</Link>
      </div>
    </div>
    </>
  )
}

export default App
