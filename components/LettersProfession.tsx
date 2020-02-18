import { useSpring, animated } from 'react-spring'

export default ({ profession, professionRef }) => {
  const props = useSpring({
    from: { opacity: 0, transform: `translate3d(-100px,0,0)` },
    opacity: 1,
    transform: `trnaslate3d(0px,0,0)`,
    ref: professionRef
  })

  return (
    <animated.div className=" relative z-10 text-white text-2xl font-extrabold" style={props}>
      {profession}
    </animated.div>
  )
}
