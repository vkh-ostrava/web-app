import React, { useEffect } from 'react'
import Parallax from 'react-rellax'
import { useMediaQuery } from 'react-responsive'

import { H2, Paragraph, Behind, Infront, Container } from '../styles/style'
import TEXT from '../constants/texts'
import OctagonLeft from '../components/OctagonLeft'
import OctagonParallax from '../components/OctagonRightParallax'
import colors from '../styles/colors'

export default function About() {
  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-device-width: 1224px)',
  })

  const paddingTop = isDesktopOrLaptop ? '250px' : '150px'
  return (
    <>
      {isDesktopOrLaptop && (
        <Behind style={{ paddingTop: '300px' }}>
          <Parallax style={{ position: 'absolute' }} speed={1}>
            <OctagonLeft background={colors.LIGHT_GREEN} />
          </Parallax>
          <OctagonLeft background={colors.RED} />
          <OctagonParallax
            background={colors.LIGHT_GREEN}
            ratio={1}
            speed={2}
            style={{ position: 'absolute', top: '300px', left: '50%' }}
          />
          <OctagonParallax
            background={colors.LIGHT_GRAY200}
            ratio={0.75}
            speed={4}
            style={{ position: 'absolute', top: '900px', left: '70%' }}
          />
          <OctagonParallax
            background={colors.LIGHT_GRAY100}
            ratio={0.75}
            speed={2}
            style={{ position: 'absolute', top: '1100px', left: '35%' }}
          />

          <Infront>
            <Container id="about" style={{ paddingTop: '250px' }}>
              <H2>VKH OSTRAVA</H2>
              <Paragraph>{TEXT.aboutVKH}</Paragraph>
            </Container>
          </Infront>
        </Behind>
      )}
      {!isDesktopOrLaptop && (
        <Container id="about" style={{ paddingTop: '150px' }}>
          <Paragraph mobile={!isDesktopOrLaptop}>{TEXT.aboutVKH}</Paragraph>
        </Container>
      )}
    </>
  )
}
