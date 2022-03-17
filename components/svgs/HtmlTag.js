import { useEffect, useState } from 'react'
import { motion, useViewportScroll, useTransform } from 'framer-motion'

export default function HTMLTag() {
  const [percent1, setPercent1] = useState(100)
  const [percent2, setPercent2] = useState(158)

  const { scrollYProgress } = useViewportScroll()
  const yRange1 = useTransform(scrollYProgress, [0.19, 0.31], [100, 0])
  const yRange2 = useTransform(scrollYProgress, [0.19, 0.31], [158, 0])
  useEffect(() => {
    yRange1.onChange((v) => {
      setPercent1(Math.trunc(yRange1.current))
      setPercent2(Math.trunc(yRange2.current))
    })
  }, [yRange1.current])

  return (
    <motion.svg
      viewBox="0 0 90 72"
      className={`w-[25vw] max-w-[180px] ${percent1===0?"fill-primary":"fill-[transparent]"} transition-all duration-1000`}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M15.8 52.2959L0.375977 37.5759L15.8 22.9199H23.16L7.67198 37.5759L23.16 52.2959H15.8Z"
        className="html-path stroke-primary"
        strokeWidth="1"
        strokeDasharray="100"
        strokeDashoffset={percent1}
      />
      <path
        d="M57.188 0.711914L39.652 71.8799H33.892L51.364 0.711914H57.188Z"
        className="html-path stroke-primary"
        strokeWidth="1"
        strokeDasharray="158"
        strokeDashoffset={percent2}
      />
      <path
        d="M66.9535 22.9199H74.3135L89.8015 37.5759L74.3135 52.2959H66.9535L82.4415 37.5759L66.9535 22.9199Z"
        className="html-path stroke-primary"
        strokeWidth="1"
        strokeDasharray="100"
        strokeDashoffset={percent1}
      />
    </motion.svg>
  )
}
