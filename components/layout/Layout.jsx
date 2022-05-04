import React from 'react'
import FootNav from './FootNav'
import Navbar from './Navbar'
import SideSocials from './Sidebar'
import { useRouter } from 'next/router'

export default function Layout({ children }) {
  const router = useRouter()

  return (
    <>
      {children}
      <Navbar />
      {router.pathname === '/' && (
        <>
          <SideSocials />
          <FootNav />
        </>
      )}
    </>
  )
}
