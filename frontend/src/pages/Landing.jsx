import Stats from '../components/Stats'
import Hero from '../components/Hero'
import React from 'react'
import Steps from '../components/Steps'
import CardSection from '../components/CardSection'
import Projects from '../components/Projects'
import OpenSource from '../components/OpenSource'
import Services from '../components/Services'

export default function Landing() {
  return (
    <div>
      {/* ✅ Home Section */}
      <section id="home">
        <Hero />
      </section>

      {/* ✅ Stats Section */}
      <section id="stats">
        <Stats />
      </section>

      {/* ✅ Services Section */}
      <section id="services">
        <Services />
      </section>

      {/* ✅ Cards Section */}
      <section id="cards">
        <CardSection />
      </section>

      {/* ✅ Steps Section */}
      <section id="steps">
        <Steps />
      </section>

      {/* ✅ Projects Section */}
      <section id="portfolio">
        <Projects />
      </section>

      {/* ✅ Open Source Section */}
      <section id="about">
        <OpenSource />
      </section>
    </div>
  )
}
