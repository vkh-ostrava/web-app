import React from 'react'
import { useMediaQuery } from 'react-responsive'

import NormalOctogen from '../components/NormalOctagon'
import ParallaxOctagon from '../components/ParallaxOctagon'
import Quote from '../components/Quote'
import TEXTS from '../constants/texts'
import { Behind, Container } from '../styles/style'
import colors from '../styles/colors'
import BorderOctagon from '../components/BorderOctagon'

export default function Quotes() {
  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-device-width: 1224px)',
  })

  return (
    <div id="quotes" style={{ margin: '0 auto' }}>
      {isDesktopOrLaptop && (
        <Behind
          style={{
            position: 'relative',
            height: '900px',
            width: '1100px',
            left: '-416px',
            margin: '0 auto',
            top: '-146px',
            transform: 'scale(0.8)',
          }}
        >
          <ParallaxOctagon
            left="1300px"
            top="900px"
            ratio={1.3}
            zIndex={-1}
            speed={2.4}
            color={colors.ORANGE}
          />
          <ParallaxOctagon
            left="461px"
            top="1415px"
            ratio={3.5}
            zIndex={-1}
            speed={3}
            color={colors.DARK_GREEN}
          />
          <ParallaxOctagon
            left="750px"
            top="1250px"
            ratio={3.5}
            zIndex={-3}
            speed={3}
            color={colors.ORANGE}
          />
          <ParallaxOctagon
            left="1050px"
            top="1000px"
            ratio={2}
            zIndex={1}
            speed={3}
            color={colors.LIGHT_GRAY200}
            opacity={0.5}
          />
          <ParallaxOctagon
            left="950px"
            top="1200px"
            ratio={2}
            zIndex={1}
            speed={3}
            color={colors.LIGHT_GRAY200}
            opacity={0.5}
          />
          <ParallaxOctagon
            left="430px"
            top="1400px"
            ratio={2}
            zIndex={1}
            speed={4}
            color={colors.LIGHT_GRAY200}
            opacity={0.7}
          />
          <ParallaxOctagon
            left="350px"
            top="1650px"
            ratio={2}
            zIndex={1}
            speed={4}
            color={colors.LIGHT_GRAY200}
            opacity={0.4}
          />
          <ParallaxOctagon
            left="500px"
            top="2200px"
            ratio={2}
            zIndex={1}
            speed={5}
            color={colors.LIGHT_GRAY200}
            opacity={0.3}
          />
          <ParallaxOctagon
            left="1200px"
            top="2250px"
            ratio={2}
            zIndex={1}
            speed={5}
            color={colors.LIGHT_GRAY200}
            opacity={0.3}
          />
          <ParallaxOctagon
            left="1120px"
            top="2460px"
            ratio={2}
            zIndex={7}
            speed={5}
            color={colors.LIGHT_GRAY200}
            opacity={0.3}
          />
          <ParallaxOctagon
            left="1200px"
            top="2800px"
            ratio={2}
            zIndex={1}
            speed={6}
            color={colors.LIGHT_GRAY200}
            opacity={0.3}
          />
          <ParallaxOctagon
            left="920px"
            top="2850px"
            ratio={1.3}
            zIndex={-3}
            speed={6}
            color={colors.RED}
          />
          <BorderOctagon
            left="951px"
            top="1660px"
            ratio={5}
            zIndex={2}
            speed={3}
            color={colors.ORANGE}
          />
          <BorderOctagon
            left="980px"
            top="700px"
            ratio={2}
            zIndex={2}
            speed={2}
            color={colors.DARK_GREEN}
          />
          <BorderOctagon
            left="670px"
            top="2115px"
            ratio={1.5}
            speed={4}
            zIndex={-2}
            color={colors.RED}
          />
          <BorderOctagon
            left="540px"
            top="2100px"
            ratio={2.5}
            speed={4}
            zIndex={-2}
            color={colors.GREEN}
          />
          <BorderOctagon
            left="650px"
            top="700px"
            ratio={3.5}
            zIndex={6}
            speed={2}
            color={colors.LIGHT_GREEN}
          />
          <BorderOctagon
            left="450px"
            top="450px"
            ratio={4.5}
            zIndex={9}
            speed={2}
            color={colors.DARK_GREEN}
          />
          <NormalOctogen
            left="751px"
            top="146px"
            ratio={4}
            zIndex={-5}
            color={colors.RED}
          />
          <NormalOctogen
            left="1050px"
            top="1000px"
            ratio={3}
            zIndex={2}
            speed={1}
            color={colors.LIGHT_GREEN}
          />
          <img
            style={{ position: 'absolute', left: '1100px', top: '358px' }}
            src="images/quotes/top.png"
            alt="top quote"
          />
          <img
            style={{ position: 'absolute', left: '790px', top: '535px' }}
            src="images/quotes/mid.png"
            alt="mid quote"
          />
          <img
            style={{ position: 'absolute', left: '810px', top: '850px' }}
            src="images/quotes/down.png"
            alt="down quote"
          />
          <Quote style={{ position: 'absolute', left: '217px', top: '518px' }}>
            {TEXTS.quotes[0]}
          </Quote>
          <Quote style={{ position: 'absolute', left: '1365px', top: '305px' }}>
            {TEXTS.quotes[1]}
          </Quote>
          <Quote style={{ position: 'absolute', left: '1055px', top: '648px' }}>
            {TEXTS.quotes[2]}
          </Quote>
        </Behind>
      )}
      {!isDesktopOrLaptop && (
        <>
          <Container>{TEXTS.quotes[0]}</Container>
          <Container>{TEXTS.quotes[1]}</Container>
          <Container>{TEXTS.quotes[2]}</Container>
        </>
      )}
    </div>
  )
}
