import ResponisveMenu from '../components/ResponisveMenu'
import ResponsiveMenuHr from '../components/ResponsiveMenuHr'

import LettersName from '../components/LettersName'
import LettersProfession from '../components/LettersProfession'
import DisplayLetters from '../components/DisplayLetters'
import AboutMe from '../components/AboutMe'

export default () => {
  return (
    <>
      <header>
        <div className="container mx-auto flex flex-col justify-center items-center h-full">
          <DisplayLetters />
        </div>
        <ResponsiveMenuHr />
      </header>
      <section className="py-8">
        <div className="container mx-auto">
          <AboutMe />
        </div>
      </section>
    </>
  )
}
