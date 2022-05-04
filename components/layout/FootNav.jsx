import { useState } from 'react'
import FootNavUl from './FootNavUl'
export default function FootNav() {
  const [selected, setSelected] = useState(null)
  return (
    <>
      <div
        className=" foot-glass rounded-t-full fixed bottom-0 left-[5vw] flex h-[6vh] px-5 max-h-[50px] w-[90vw] items-center justify-between text-onAccentTr md:hidden"
      >
          <FootNavUl />
        <style jsx>{`
          l {
            box-shadow: 0 0 5px #fff, 0 0 5px #fff, 0 0 9px #0ff,
              0 0 30px #00ffff99;
          }
        `}</style>
      </div>
    </>
  )
}
