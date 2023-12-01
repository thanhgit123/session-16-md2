import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/home/Home'
import Register from './pages/register/Register'
import Login from './pages/login/Login'

export default function App() {
  return (
    <>
      <Routes>
         <Route path='/' element={<Home></Home>} ></Route>
         <Route path='/register' element={<Register></Register>}></Route>
         <Route path='/login' element={<Login></Login>}></Route>
      </Routes>
    </>
  )
}
