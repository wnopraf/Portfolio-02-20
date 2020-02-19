import ResponisveMenu from '../components/ResponisveMenu'
import ResponsiveMenuHr from '../components/ResponsiveMenuHr'

import LettersName from '../components/LettersName'
import LettersProfession from '../components/LettersProfession'
import DisplayLetters from '../components/DisplayLetters'
import AboutMe from '../components/AboutMe'
import MyWork from '../components/MyWork'
import Contact from '../components/Contact'

export default () => {
  return (
    <>
      <header>
        <div className="container mx-auto flex flex-col justify-center items-center h-full">
          <DisplayLetters />
        </div>
        <ResponsiveMenuHr />
      </header>
      <section>
        <div className="about-me-wrapper container mx-auto px-8 py-64">
          <AboutMe />
        </div>
      </section>
      <section>
        <div className="my-work-wrapper container mx-auto p-8 py-64">
          <MyWork />
        </div>
      </section>
      <section className="">
        <div className="contact-wrapper container mx-auto p-8 py-32">
          <Contact />
        </div>
      </section>
    </>
  )
}
