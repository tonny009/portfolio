import React from 'react'
import { useLoaderData } from 'react-router-dom'
import About from './About'
import Contact from './Contact'
import Education from './Education'
import Footer from './Footer'
import Home from './Home'
import Navbar from './Navbar'
import Projects from './Projects'
import Publication from './Publication'
import Skills from './Skills'

const Main = () => {
  const projects = useLoaderData()
  return (
    <div>
      <Navbar></Navbar>
      <Home></Home>
      <About></About>
      <Education></Education>
      <Skills></Skills>

      <Projects projects={projects}></Projects>
      <Publication></Publication>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  )
}

export default Main
