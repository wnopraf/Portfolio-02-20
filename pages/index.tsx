import ResponisveMenu from '../components/ResponisveMenu'
import ResponsiveMenuHr from '../components/ResponsiveMenuHr'

import LettersName from '../components/LettersName'
import LettersProfession from '../components/LettersProfession'
import DisplayLetters from '../components/DisplayLetters'
import AboutMe from '../components/AboutMe'
import MyWork from '../components/MyWork'

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
        <div className="about-me-wrapper container mx-auto p-8">
          <AboutMe />
        </div>
      </section>
      <section className="py-8">
        <div className="my-work-wrapper container mx-auto p-8">
          <MyWork />
        </div>
      </section>
    </>
  )
}
