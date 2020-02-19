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
    <div className="My-work text-center">
      <h1 className="font-extrabold">Want to know more about my work ?</h1>
      <div className="My-work__icon flex justify-center items-center">
        <p className="font-extrabold text-2xl mr-10 ml-4">Visit my Github profile</p>
        <a href="" className="relative block h-16">
          {trail.map((props, i) => {
            return (
              <animated.div
                key={i}
                style={props}
                className="my-work__circle border-2 absolute h-16 w-16 rounded-full"
              ></animated.div>
            )
          })}
          <FaGithub className=" absolute h-16 w-16 rounded-full" />
        </a>
      </div>
    </div>
  )
}
