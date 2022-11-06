import React from 'react'
import './About.css'
import ErrorBoundary from './ErrorBoundary'

const About = () => {
  return (
    <div className='about'>
        I am a Medical Consultant and an aspiring full-stack developer, I have an avid interest in creating tech-oriented solutions for the everyday health care problems.
        I am also the C.0.0 of Parties "n" Pomp; a company with the vision of creating fun-filled environment for working class young adults
        while fostering meaningful connections.

    <ErrorBoundary>
      <footer />
    </ErrorBoundary>
    </div>
  )
}

export default About