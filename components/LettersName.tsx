import { useTrail, animated } from 'react-spring'

export default ({ name }: { name: string }) => {
  const splitedName = [...name]

  console.log(splitedName, 'letters')
  const trail = useTrail(splitedName.length, {
    from: {
      opacity: 0,
      transform: `translate3d(0px,-300px,0px)`
    },
    opacity: 1,
    transform: `translate3d(0px,0px,0px)`
  })

  return (
    <div className="absolute bottom-0 z-10">
      {trail.map((props, index) => {
        return splitedName[index] === ' ' ? (
          <animated.span key={index} style={props} className="text-3xl text-white font-sans inline-block">
            &nbsp;
          </animated.span>
        ) : (
          <animated.span key={index} style={props} className="text-3xl text-white font-sans inline-block">
            {splitedName[index]}
          </animated.span>
        )
      })}
    </div>
  )
}
