import React from 'react'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import { Outlet } from 'react-router-dom'

export const Layout = () => {
  return (
    <>
        <Header />
        {/* Outlet will dynamically change the content of the page  */}
        <Outlet />
        <Footer />
    </>
  )
}
