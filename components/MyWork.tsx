import { FaGithub } from 'react-icons/fa'
import { useTrail, animated, config, interpolate } from 'react-spring'
import { useState, useRef } from 'react'
export default () => {
  const [isActive, setIsActive] = useState(false)
  const trail = useTrail(2, {
    from: { transform: `scale(1)` },
    transform: `scale(1.5)`,
    reset: true,
    onRest: () => setIsActive(!isActive),
    config: config.molasses
  })
  return (
    <div className="my-work text-center">
      <h1 className=" font-extrabold tracking-wider">Want to know more about my work ?</h1>
      <div className="my-work__icon pt-10 flex flex-col md:flex-row justify-center items-center">
        <p className="font-extrabold text-2xl sm:text-4xl tracking-wider mr-10 ml-4">Visit my Github profile</p>
        <a
          href="https://github.com/wnopraf"
          target="_blank"
          rel="noopener noreferrer"
          className="relative block h-16 w-16 mt-12 md:mt-0"
        >
          {trail.map((props, i) => {
            return <animated.div key={i} style={props} className="my-work__circle "></animated.div>
          })}
          <FaGithub className=" absolute w-16 h-16 rounded-full" />
        </a>
      </div>
    </div>
  )
}
