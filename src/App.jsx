import React from 'react'
import Navbar from './components/Navbar'
import Character from './components/Character'
import Hero from './components/Hero'
import About from './components/About'
import Activity from './components/Activity'
import Quote from './components/Quote'
import Project from './components/Project'
import Footer from './components/Footer'
import Preloader from './components/Preloader'

const App = () => {
  return (
    <>
      <Preloader/>
      <Navbar />
      <div className='relative'>
        <Hero />
        <About />
        <Activity />
        <Character />
      </div>
      <Quote/>
      <Project/>
      <Footer/>
    </>
  )
}

export default App