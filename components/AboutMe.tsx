import { useEffect, useState, useRef } from 'react'
import { useSpring, animated } from 'react-spring'

export default () => {
  const [isScrolled, setIsScrolled] = useState(false)

  const node: { current: HTMLDivElement } = useRef()
  const props = useSpring({
    from: { opacity: 0, transform: `translate3d(0, 50%,0)` },
    opacity: isScrolled ? 1 : 0,
    transform: `translate3d(0,${isScrolled ? '0' : '50%'},0)`,
    delay: 500
  })

  useEffect(() => {
    const nodeRect = node.current.getBoundingClientRect()
    const onScroll = () => {
      const docElement = document.documentElement
      if (docElement.scrollTop + window.innerHeight >= nodeRect.top) {
        console.log('set scroll')
        setIsScrolled(isScrolled => !isScrolled)
        window.removeEventListener('scroll', onScroll)
      }
    }
    window.addEventListener('scroll', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
    }
  }, [])
  console.log(props)
  return (
    <animated.div ref={node} style={props} className="about-me text-2xl font-extrabold tracking-widest text-gray-400">
      <p>
        Hi, i'm Rafael, a web developer based on Granada, Spain. Im specialized in javascript and frontend technologies,
        but i can handle backend programming as well.
      </p>
      <p>Always learning and thinking about the next big thing to create.</p>
      <p>I love the magic moment of running code and see what happens.</p>
    </animated.div>
  )
}
