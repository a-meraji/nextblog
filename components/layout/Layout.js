import React from 'react'
import FootNav from './FootNav'
import Navbar from './Navbar'
import SideSocials from './Sidebar'

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <SideSocials/>
      {children}
      <FootNav/>
    </>
  )
}
