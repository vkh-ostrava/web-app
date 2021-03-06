import React, { useEffect, useState } from 'react'
import axios from 'axios'

import { Switch, Route, useLocation } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import ReactGA from 'react-ga'

import { Navbar } from './components/NavBar/Navbar'

import WordpressPage from './pages/WordpressPage'
import ProgramInOstrava from './pages/ProgramInOstrava'
import Contact from './pages/Contact'
import VkhCr from './pages/VKHCR'
import Main from './pages/Main'

import './App.css'
import { StyledApp } from './styles/style'

function App() {
  ReactGA.initialize('UA-158646674-1')
  ReactGA.pageview(window.location.pathname + window.location.search)

  const [menu, setMenu] = useState([])
  const [sun, setSun] = useState({})
  const [theme, setTheme] = useState({ theme: 'light' })
  let location = useLocation()

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
  }, [location])

  useEffect(() => {
    const fetchData = async () => {
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
    const fetchSun = async () => {
      const result = await axios(
        `https://api.sunrise-sunset.org/json?lat=49.8414404&lng=18.1690531`
      )
      setSun(result.data.results)
    }

    fetchSun()
    fetchData()
  }, [])

  const parseDate = (now, date, plus12) => {
    const x = date.slice(0, -3).split(':')
    const parsed = new Date(
      now.getFullYear(),
      now.getMonth(),
      now.getDate(),
      x[0],
      x[1],
      x[2]
    )
    const add12 = plus12 ? 720 : 0
    parsed.setMinutes(parsed.getMinutes() - now.getTimezoneOffset() + add12)
    return (
      parsed.getHours() * 60 +
      parsed.getMinutes() -
      (now.getHours() * 60 + now.getMinutes())
    )
  }
  useEffect(() => {
    const now = new Date()
    if (sun.sunset) {
      const timeToSunset = parseDate(now, sun.sunset, true)
      const timeToSunrise = parseDate(now, sun.sunrise, false)

      if (timeToSunrise > 0) {
        setTheme({ theme: 'dark' })
        document.body.style.backgroundColor = '#1c1c1c'
      } else if (timeToSunrise < 0 && timeToSunset > 0) {
        setTheme({ theme: 'light' })
        document.body.style.backgroundColor = 'white'
      } else {
        setTheme({ theme: 'dark' })
        document.body.style.backgroundColor = '#1c1c1c'
      }
    }
  }, [sun])

  return (
    <ThemeProvider theme={theme}>
      <StyledApp>
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
            <Main />
          </Route>
        </Switch>
      </StyledApp>
    </ThemeProvider>
  )
}

export default App
