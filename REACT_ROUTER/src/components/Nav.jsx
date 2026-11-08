import React from 'react'
import { NavLink } from 'react-router-dom'

const Nav = () => {
  return (
    <div className='min-h-16 bg-gray-100 text-gray-900'>
        <header className='flex justify-around  p-4 '>
          
      <h1 className='text-2xl font-bold'>my App</h1>

       <nav className="flex justify-center gap-6 py-4">
  <NavLink className={({ isActive }) => (isActive ? 'font-bold  underline' : undefined)} to="/">Home</NavLink>
  <NavLink className={({ isActive }) => (isActive ? 'font-bold  underline' : undefined)} to="/about">About</NavLink>
  <NavLink className={({ isActive }) => (isActive ? 'font-bold  underline' : undefined)} to="/contact">Contact</NavLink>
  <NavLink className={({ isActive }) => (isActive ? 'font-bold  underline' : undefined)} to="/users">Users</NavLink>
   </nav>
        </header>
    </div>
  )
}

export default Nav