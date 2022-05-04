import Gear from '../svgs/gear'

import { useEffect, useState } from 'react'
import { motion, useViewportScroll, useTransform } from 'framer-motion'

export default function Gears() {
  const [currentPrecent, setCurrentPercent] = useState(null)
  const { scrollYProgress } = useViewportScroll()
  const yRange = useTransform(scrollYProgress, [0, 1], [0, 1000])

  useEffect(() => {
    yRange.onChange((v) => {
      setCurrentPercent(Math.trunc(yRange.current))
    })
  }, [yRange.current])

  return (
    <motion.div
      initial={{ zIndex: -100, opacity: 0 }}
      whileInView={{ zIndex: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{
        opacity: { ease: 'easeOut', duration: 2 },
      }}
      className="absolute w-full right-0 top-3/4  xl:top-1/2"
    >
      <motion.div
        style={{ transform: `rotate(${currentPrecent}deg)` }}
        className={`absolute right-0 top-0 w-[25vw] xl:w-[12vw]`}
      >
        <Gear />
      </motion.div>
      <motion.div
        style={{ transform: `rotate(${-currentPrecent}deg)` }}
        className="absolute right-[23.5vw] top-0 mt-[10vw] w-[15vw] xl:right-[11.25vw] xl:mt-[5vw] xl:w-[8vw]"
      >
        <Gear />
      </motion.div>
    </motion.div>
  )
}
