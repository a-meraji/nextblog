import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import Logo from '../svgs/logo'

export default function Navbar() {
  const router = useRouter()
  const [selected, setSelected] = useState(null)
  useEffect(() => {
    if (typeof window === 'undefined' || typeof document === 'undefined') return

    const path = router.asPath
    const aList = document.getElementsByClassName('link')
    var preSelected
    Array.prototype.forEach.call(aList, (a, i) => {
      // check if url is the same as the id of element
      if (path.includes(a.getAttribute('href'))) {
        preSelected = a.getAttribute('href')
        if (path !== '/' && i === 0) {
          preSelected = null
        }
      }
      // eventListener to change the color of the selected element
      a.addEventListener('click', () => {
        setSelected(a.getAttribute('href'))
      })
      // add or remove classes to the selected element
      if (a.getAttribute('href') === preSelected) {
        a.classList.add('text-onAccent', 'border-b-onAccent', 'border-b-[1px]')
      } else {
        a.classList.remove('text-onAccent', 'border-b-onAccent', 'border-b-[1px]')
      }
    })
    setSelected(preSelected)
  }, [
    typeof window !== 'undefined' && typeof document !== 'undefined'
      ? router.asPath
      : null,
  ])

  return (
    <nav className="layout-p raleway fixed top-0 left-0 right-0 flex justify-between bg-transparent z-50 py-5 capitalize text-accent">
      <div>
        <Link href="/">
          <a className="link"><Logo/></a>
        </Link>
      </div>
      <div>
        <ul className="flex justify-end gap-4">
          <li className='hidden md:block'>
            <Link href="/#about">
              <a className="link">about</a>
            </Link>
          </li>
          <li className='hidden md:block'>
            <Link href="/#my-works">
              <a className="link">my works</a>
            </Link>
          </li>
          <li className='hidden md:block'>
            <Link href="/#message">
              <a className="link">message</a>
            </Link>
          </li>
          <li>
            <Link href="/blog">
              <a className="link">blog</a>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}
