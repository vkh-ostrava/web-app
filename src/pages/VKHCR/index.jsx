import React from 'react'
import { useMediaQuery } from 'react-responsive'

import {
  Container,
  Paragraph,
  H2Color,
  Column,
  Row,
  H3,
} from '../../styles/style'
import { Link } from './styles'
import Footer from '../../sections/Footer'
const vkhs = [
  {
    name: 'VKH České Budějovice',
    imageSrc: 'VKHBudejovice.png',
    website: 'http://vkhcb.cz/domains/vkhcb.cz/',
  },
  {
    name: 'VKH Brno',
    imageSrc: 'VKHBrno.png',
    website: 'http://www.vkhbrno.cz',
  },
  {
    name: 'VKH Praha',
    imageSrc: 'VKHPraha.png',
    website: 'https://vkhpraha.cz/',
  },
  {
    name: 'KAK Salaš',
    imageSrc: 'Salas.png',
    website: 'https://www.salas.hk/',
  },
  {
    name: 'VKH Olomouc',
    imageSrc: 'VKHOlomouc.png',
    website: 'http://www.vkholomouc.cz/',
  },
  {
    name: 'RR49 Zlín',
    imageSrc: 'RRZlin.png',
    website: 'http://rr49.cz/',
  },
]

const showVKHs = () => {
  return vkhs.map(vkh => (
    <Column xs={12} md={4}>
      <Row style={{ justifyContent: 'center', padding: '40px 0 20px' }}>
        <img
          src={'/images/vkh-v-cr/' + vkh.imageSrc}
          alt={vkh.name}
          width="50%"
        />
      </Row>
      <Row style={{ justifyContent: 'center' }}>
        <H3>
          <Link href={vkh.website} target="_blank" rel="noopener noreferrer">
            {vkh.name}
          </Link>
        </H3>
      </Row>
    </Column>
  ))
}

const VkhCr = () => {
  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-device-width: 1224px)',
  })

  const bg = isDesktopOrLaptop
    ? {
        background: 'url(/images/vkh-v-cr/bg.svg) no-repeat bottom right',
        backgroundSize: 'contain',
      }
    : {}

  return (
    <div style={bg}>
      <Container>
        <H2Color>VKH V ČR</H2Color>
        <Paragraph mobile={!isDesktopOrLaptop}>
          VKH Ostrava je členem organizace{' '}
          <Link
            href="http://www.vkhcr.cz/"
            target="_blank"
            rel="noopener noreferrer"
          >
            VKH ČR
          </Link>
          , která zastřešuje aktivity jednotlivých Vysokoškolských katolických
          hnutí v městech naší republiky. Pod její záštitou se ukrývají akce
          jako Studentský Velehrad, Konference a další.
        </Paragraph>
        <Paragraph mobile={!isDesktopOrLaptop}>
          Historie projektu sahá do roku 1989, kdy začala v univerzitních
          městech České republiky spontánně vznikat vysokoškolská společenství.
          V průběhu let se rozrůstala do dalších měst, zvyšoval se počet a
          kvalita akcí a prohlubovala se vzájemná spolupráce. Dnes se ve větších
          městech setkáte se společenstvími studentů, která nabízí různorodý
          program. V menších městech existují společenství, jejichž činnost leží
          spíše na aktivitě vlastních členů.
        </Paragraph>
        <Container style={{ backgroundImage: 'none' }}>
          <Row>{showVKHs()}</Row>
        </Container>
      </Container>
      <Footer />
    </div>
  )
}

export default VkhCr
