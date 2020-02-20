import { useSpring, animated } from 'react-spring'

export default ({ profession, professionRef }) => {
  const props = useSpring({
    from: { opacity: 0, transform: `translate3d(-100px,0,0)` },
    opacity: 1,
    transform: `trnaslate3d(0px,0,0)`,
    ref: professionRef
  })

  return (
    <animated.h1 className="text-5xl md:text-6xl relative z-10 text-white font-extrabold tracking-wider" style={props}>
      {profession}
    </animated.h1>
  )
}
