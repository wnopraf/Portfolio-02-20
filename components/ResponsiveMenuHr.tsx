import { MdMenu, MdClose } from 'react-icons/md'
import { useSpring, animated, useTransition, config } from 'react-spring'
import { useState } from 'react'
export default () => {
  const [isOpen, setIsOpen] = useState(false)
  const props = useSpring({ transform: isOpen ? `translate3d(0%,0,0)` : `translate3d(-100%,0,0)` })
  const transitions = useTransition(isOpen, null, {
    from: { opacity: 0, transform: `rotateY(0deg)` },

    enter: { transform: `rotateY(180deg)`, opacity: 1 },
    leave: { transform: `rotateY(180deg)`, opacity: 1 }
  })
  return (
    <div className="menu-hr text-xl text-white pt-3 relative">
      {transitions.map(({ item, key, props }) => {
        return item ? (
          <animated.span style={props} className=" bg-indigo-400 inline-block absolute menu-position text-3xl">
            <MdClose onClick={() => setIsOpen(!isOpen)} className="cursor-pointer" />
          </animated.span>
        ) : (
          <animated.span style={props} className=" bg-indigo-400 inline-block absolute menu-position text-3xl">
            <MdMenu onClick={() => setIsOpen(!isOpen)} className="cursor-pointer" />
          </animated.span>
        )
      })}
      <animated.div className="absolute bg-indigo-400 text-white left-0 mt-10 px-6 py-2" style={props}>
        <div className="menu-hr__item">
          <a href="">menu-item</a>
        </div>
        <div className="menu-hr__item">
          <a href="">menu-item</a>
        </div>
        <div className="menu-hr__item">
          <a href="">menu-item</a>
        </div>
        <div className="menu-hr__item">
          <a href="">menu-item</a>
        </div>
        <div className="menu-hr__item">
          <a href="">menu-item</a>
        </div>
      </animated.div>
    </div>
  )
}
