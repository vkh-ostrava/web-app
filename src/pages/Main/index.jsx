import React from 'react'

import FirstSection from '../../sections/FirstSection'
import About from '../../sections/About'
import Quotes from '../../sections/Quotes'
import { Calendar } from '../../components/Calendar'
import Instagram from '../../components/Instagram/Instagram'
import Footer from '../../sections/Footer'

const Main = () => {
  return (
    <>
      <FirstSection />
      <About />
      <Quotes />
      <Calendar />
      <Instagram />
      <Footer />
    </>
  )
}

export default Main
