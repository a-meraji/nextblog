import { useEffect, useState } from 'react'
import Link from 'next/link'
export default function FootNavUl() {
  const [selected, setSelected] = useState(null)

  useEffect(() => {
    console.log(selected)
  }, [selected])
  return (
    <ul className="flex h-full w-full items-center justify-between capitalize">
      <li>
        <Link href="#about">
          <a
            onClick={(e) => {
              setSelected(e.target.href.split('#')[1])
            }}
            className={`${selected === 'about' ? 'text-txtAccent' : ''}`}
          >
            about
          </a>
        </Link>
      </li>
      <li
      >
        <Link href="#my-works">
          <a 
          onClick={(e) => {
            setSelected(e.target.href.split('#')[1])
          }}
          className={`${selected === 'my-works' ? 'text-txtAccent' : ''}`}>my works</a>
        </Link>
      </li>
      <li>
        <Link href="#message">
          <a 
          onClick={(e) => {
            setSelected(e.target.href.split('#')[1])
          }}
          className={`foot-li ${selected === 'message' ? 'text-txtAccent' : ''}`}>message</a>
        </Link>
      </li>
    </ul>
  )
}
