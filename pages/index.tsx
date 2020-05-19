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
      <header>
        <div className="container mx-auto flex flex-col justify-center items-center h-full">
          <DisplayLetters />
        </div>
        <ResponsiveMenuHr />
      </header>
      <section id="About-me">
        <div className="about-me-wrapper container mx-auto px-8 py-64">
          <h1 className=" text-3xl text-white font-bold">About Me</h1>
          <AboutMe />
        </div>
      </section>
      <section id="My-work">
        <div className="my-work-wrapper container mx-auto p-8 py-64">
          <MyWork />
        </div>
      </section>
      <section id="Contact">
        <div className="contact-wrapper container mx-auto p-8 py-32">
          <Contact />
        </div>
      </section>
    </>
  )
}
