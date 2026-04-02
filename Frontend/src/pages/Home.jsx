import React from 'react'
// import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Projects from '../components/Projects'
import Skills from "../components/Skills"
import About from "../components/About"
import Contact from "../components/Contact"

const Home = () => {
  
  return (
    <div>
      {/* <Navbar /> */}
      <Hero />
      <Projects />
        <Skills />
        <About />
        <Contact />
    </div>
  )
}

export default Home
