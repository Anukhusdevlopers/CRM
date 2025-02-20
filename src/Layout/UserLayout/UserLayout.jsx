import React from 'react'
import Navabr from './Navbar/Navbar'
import Footer from './Footer/Footer'
import { Outlet } from 'react-router-dom'

const UserLayout = () => {
  return (
    <>
        <Navabr/>
          <Outlet/>
        <Footer/>
        
    </>
  )
}

export default UserLayout