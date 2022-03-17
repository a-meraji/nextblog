import { BiCopy, BiCheck } from 'react-icons/bi'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Gears from './Gears'
import { useState } from 'react'
export default function FirstIntro() {
  const [isClicked, setIsClicked] = useState(false)
  return (
    <section className="relative flex h-screen flex-col items-center xl:flex-row">
      <div className="my-auto pl-5">
        <div className="flex w-full items-center justify-start gap-x-3">
          <motion.div
            initial={{ zIndex: -100, opacity: 0, x: -100 }}
            whileInView={{ zIndex: 0, opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{
              opacity: { ease: 'easeOut', duration: 1 },
              x: { ease: 'easeOut', duration: 1 },
            }}
          >
            <Image
              src="/me.jpg"
              alt="amin meraji"
              width={140}
              height={140}
              objectFit="cover"
              className="rounded-full"
            />
          </motion.div>
          <motion.div
            initial={{ zIndex: -100, opacity: 0, x: 100 }}
            whileInView={{ zIndex: 0, opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{
              opacity: { ease: 'easeOut', duration: 1 },
              x: { ease: 'easeOut', duration: 1 },
            }}
            classame="w-full text-secondary"
          >
            <h6 className="text-sm text-secondary">I'm Amin Meraji</h6>
            <p className="text-xs text-secondary">available for work</p>
          </motion.div>
        </div>
        <motion.div
          initial={{ zIndex: -100, opacity: 0, y: 100 }}
          whileInView={{ zIndex: 0, opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            opacity: { ease: 'easeOut', duration: 1 },
            y: { ease: 'easeOut', duration: 1 },
          }}
        >
          <p className="my-8 -mr-10 text-4xl font-bold md:text-6xl">
            I’m a front-end developer.
            <br />I love to give life to ideas.
          </p>
          <button
            onClick={() => {
              navigator.clipboard.writeText('merajiamin1997@gmail.com')
              setIsClicked(true)
              setTimeout(()=>{
                setIsClicked(false)
              },1500)
            }}
            className="group relative flex items-center justify-between gap-x-1 rounded-full bg-accent py-2 px-4 text-onAccent"
          >
            <span className={`transition-all ${isClicked&&"-translate-x-[200%]"} group-hover:-translate-x-[200%]`}>
              copy my e-mail
            </span>

              <span className={`transition-all flex justify-center items-center duration-300  absolute my-auto right-0 left-0  ${isClicked?"opacity-100":"opacity-0"}`}>
                <span>copied</span>
                <BiCheck />
                </span> 

              <BiCopy className={`transition-all duration-300  group-hover:-translate-x-[350%] group-hover:scale-150 ${isClicked?"opacity-0":"opacity-100"}`} />

          </button>
        </motion.div>
      </div>
      <Gears />
    </section>
  )
}
