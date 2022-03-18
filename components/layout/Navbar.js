import React, { useState, useEffect } from 'react'
import { useGlobalContext } from '../../context/globalContext/context'
import Link from 'next/link'
import { useRouter } from 'next/router'
import Logo from '../svgs/logo'
import  {BsFillSunFill,BsFillMoonFill} from 'react-icons/bs'

export default function Navbar() {
  const {theme, setTheme} = useGlobalContext();

  return (
    <nav className="layout-p raleway fixed top-0 left-0 right-0 flex justify-between items-center bg-transparent z-50 py-5 capitalize text-accent">
      <div>
        <Link href="/">
          <a className="link"><Logo/></a>
        </Link>
      </div>
      <div>
        <ul className="flex justify-end gap-4">
          <li onClick={()=>setTheme(theme==="dark"?"light":"dark")} className='my-auto'>{theme==="dark"?<BsFillMoonFill/> :<BsFillSunFill/>}</li>
          <li className='hidden md:block'>
            <Link href="#about">
              <a className="link">about</a>
            </Link>
          </li>
          <li className='hidden md:block'>
            <Link href="#my-works">
              <a className="link">my works</a>
            </Link>
          </li>
          <li className='hidden md:block'>
            <Link href="#message">
              <a className="link">message</a>
            </Link>
          </li>
          <li>
            <Link href="/">
              <a className="link">blog</a>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}
