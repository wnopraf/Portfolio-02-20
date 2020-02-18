import ResponisveMenu from '../components/ResponisveMenu'
import ResponsiveMenuHr from '../components/ResponsiveMenuHr'

import LettersName from '../components/LettersName'
import LettersProfession from '../components/LettersProfession'
import DisplayLetters from '../components/DisplayLetters'

export default () => {
  return (
    <>
      <header className="">
        <div className="container mx-auto flex flex-col justify-center items-center h-full">
          {/* <LettersName name="Rafael Prieto" />
          <LettersProfession profession="Web developer" /> */}
          <DisplayLetters />
        </div>
        <ResponsiveMenuHr />
      </header>
    </>
  )
}
