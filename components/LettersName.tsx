import { useTrail, animated } from 'react-spring'

export default ({ name, nameRef }) => {
  const splitedName = [...name]

  console.log(splitedName, 'letters')
  const trail = useTrail(splitedName.length, {
    from: {
      opacity: 0,
      transform: `translate3d(0px,-300px,0px)`
    },
    opacity: 1,
    transform: `translate3d(0px,0px,0px)`,
    ref: nameRef
  })

  return (
    <div className="letter-wrapper relative z-10  text-white font-extrabold">
      {trail.map((props, index) => {
        return splitedName[index] === ' ' ? (
          <animated.span key={index} style={props} className="letter inline-block">
            &nbsp;
          </animated.span>
        ) : (
          <animated.span key={index} style={props} className="letter inline-block">
            {splitedName[index]}
          </animated.span>
        )
      })}
    </div>
  )
}
