import { MdMenu, MdClose } from 'react-icons/md'
import { useSpring, animated, useTransition, config } from 'react-spring'
import { useState } from 'react'
export default () => {
  const [isOpen, setIsOpen] = useState(false)
  const props = useSpring({ transform: isOpen ? `translate3d(0%,0,0)` : `translate3d(-100%,0,0)` })
  const transitions = useTransition(isOpen, null, {
    from: { opacity: 0, transform: `rotateY(0deg)` },
    initial: null,
    enter: { transform: `rotateY(180deg)`, opacity: 1 },
    leave: { transform: `rotateY(180deg)`, opacity: 1 }
  })
  return (
    <div className="menu-hr text-xl text-white pt-3">
      {transitions.map(({ item, key, props }) => {
        return item ? (
          <animated.span style={props} className="menu-button ">
            <MdClose onClick={() => setIsOpen(!isOpen)} className="cursor-pointer" />
          </animated.span>
        ) : (
          <animated.span style={props} className="menu-button ">
            <MdMenu onClick={() => setIsOpen(!isOpen)} className="cursor-pointer" />
          </animated.span>
        )
      })}
      <animated.div className="absolute bg-indigo-400 text-white left-0 top-0 mt-20  z-10 p-6" style={props}>
        <div className="menu-hr__item">
          <a href="/">Index</a>
        </div>
        <div className="menu-hr__item">
          <a href="#About-me">About Me</a>
        </div>
        <div className="menu-hr__item">
          <a href="#My-work">My Work</a>
        </div>
        <div className="menu-hr__item">
          <a href="#Contact">Contact</a>
        </div>
      </animated.div>
    </div>
  )
}
