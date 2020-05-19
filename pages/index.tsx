import ResponsiveMenuHr from '../components/ResponsiveMenuHr'
import Head from 'next/head'
import LettersName from '../components/LettersName'
import LettersProfession from '../components/LettersProfession'
import DisplayLetters from '../components/DisplayLetters'
import AboutMe from '../components/AboutMe'
import MyWork from '../components/MyWork'
import Contact from '../components/Contact'

export default () => {
  return (
    <>
    <Head>
    <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600&family=Squada+One&display=swap" rel="stylesheet"></link>
    </Head>
      <div className="content">
      <header>
        <div className="container mx-auto flex flex-col justify-center items-center h-full">
          <DisplayLetters />
        </div>
        <ResponsiveMenuHr />
      </header>
      <section id="About-me" className="py-16 mt-4 hover:bg-white transition-colors duration-300">
        <div className="about-me-wrapper container mx-auto px-4   ">
          
          <AboutMe />
        </div>
      </section>
      <section id="My-work" className="mt-16 hover:bg-white transition-colors duration-300">
        <div className="my-work-wrapper container mx-auto p-8 py-64">
          <MyWork />
        </div>
      </section>
      <section id="Contact" className="mt-16 text-white hover:bg-white transition-colors duration-300">
        <div className="contact-wrapper container mx-auto p-8 py-32">
          <Contact />
        </div>
      </section>

      </div>
      
    </>
  )
}
