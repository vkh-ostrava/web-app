import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './App.css'
import { Switch, Route, useLocation } from 'react-router-dom'

import Footer from './sections/Footer'
import FirstSection from './sections/FirstSection'
import About from './sections/About'
import Quotes from './sections/Quotes'
import Instagram from './components/Instagram/Instagram'
import WordpressPage from './pages/WordpressPage'
import { Navbar } from './components/NavBar/Navbar'
import { Calendar } from './components/Calendar'
import ProgramInOstrava from './pages/ProgramInOstrava'
import Contact from './pages/Contact'
import VkhCr from './pages/VKHCR'

function App() {
  const [menu, setMenu] = useState([])
  let location = useLocation()

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
  }, [location])

  useEffect(() => {
    const fetchData = async () => {
      //TODO change URL for something better
      const result = await axios(
        `https://administrace.vkhostrava.cz/wp-json/menus/v1/menus/2`
      )
      result.data.forEach(({ object_id, title, url }) => {
        const link = url.split('/')
        setMenu(oldmenu => [
          ...oldmenu,
          { id: object_id, path: `/${link[link.length - 2]}`, title: title },
        ])
      })
    }
    fetchData()
  }, [])

  return (
    <div className="App">
      <Navbar wordpressMenu={menu} />

      <Switch>
        <Route path="/kontakt">
          <Contact />
        </Route>
        <Route path="/duchovni-program-v-ostrave">
          <ProgramInOstrava />
        </Route>
        <Route path="/vkh-v-cr">
          <VkhCr />
        </Route>
        {menu.map(({ id, path }) => (
          <Route path={path} key={id}>
            <WordpressPage id={id} />
          </Route>
        ))}
        <Route path="/">
          <FirstSection />
          <About />
          <Quotes />
          <Calendar />
          <Instagram />
          <Footer />
        </Route>
      </Switch>
    </div>
  )
}

export default App
