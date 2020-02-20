import { useRef } from 'react'
import { useChain } from 'react-spring'
import LettersName from './LettersName'
import LettersProfession from './LettersProfession'

export default () => {
  const nameRef = useRef()
  const professionRef = useRef()

  useChain([nameRef, professionRef])

  return (
    <div className="pl-4">
      <LettersName name="Rafael Prieto" nameRef={nameRef} />
      <LettersProfession profession="Web Developer" professionRef={professionRef} />
    </div>
  )
}
