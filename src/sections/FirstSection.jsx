import React from 'react'
import Parallax from 'react-rellax'
import { useMediaQuery } from 'react-responsive'
import { H2, H3, Container } from '../styles/style'

import OctagonRight from '../components/OctagonRight'
import colors from '../styles/colors'
import SVGOne from '../components/SVGOne'

export default function FirstSection() {
  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-device-width: 1224px)',
  })

  const logoWidth = isDesktopOrLaptop ? '600px' : '100%'
  return (
    <>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <Container>
          <div
            style={{
              flex: 'auto',
            }}
          >
            <Parallax speed={-2}>
              <img src="logoVKH.png" width={logoWidth} alt="Logo VKH" />
              <H2>VKH OSTRAVA</H2>
              <H3>Vytěž ze sebe to nejlepší!</H3>
            </Parallax>
          </div>
        </Container>
        {isDesktopOrLaptop && (
          <Parallax style={{ position: 'absolute', right: '0' }} speed={-2}>
            <OctagonRight background={colors.RED} />
          </Parallax>
        )}
        {isDesktopOrLaptop && <OctagonRight background={colors.LIGHT_GREEN} />}
      </div>
      {isDesktopOrLaptop && <SVGOne />}
    </>
  )
}
