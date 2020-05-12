import React from 'react'
import { useMediaQuery } from 'react-responsive'

import {
  H2Color,
  Container,
  H3,
  Row,
  Column,
  Paragraph,
  OutedButton,
} from '../styles/style'
import Footer from '../sections/Footer'

export default function ProgramInOstrava() {
  const organizations = [
    {
      title: 'BOSCO OSTRAVA',
      text:
        'Každé pondělí v akademickém roce se můžeš v Boscu zapojit do Studentské mše svaté od 19 hodin a poté pokračovat na společenství, kde je možnost posezení v baru či další program. Bosco najdeš na ulici Vítkovická 28.',
      url: 'https://www.boscoostrava.cz/',
      logo: 'images/duchovni-program-v-ostrave/don-bosco-logo.png',
      image_full: {
        src: 'images/duchovni-program-v-ostrave/don-bosco.png',
        alt: 'Don Bosco Ostrava',
      },
    },
    {
      title: 'DIECÉZNÍ CENTRUM MLÁDEŽE V OSTRAVĚ',
      text:
        'V nedaleké Staré Vsi nad Ondřejnicí sídlí Diecézní centrum mládeže. Ale pokud nemáte cestu na pobyt na DCM do jejcih pověstného vagónu, tak můžeš přijít na Biskupství Ostravsko-opavské diecéze do centra Ostravy. Každou první středu se zde konají Večery mladých pořádané právě DCM.',
      url: 'http://dcm.doo.cz/',
      logo: 'images/duchovni-program-v-ostrave/dcm-logo.png',
      image_full: {
        src: 'images/duchovni-program-v-ostrave/dcm.png',
        alt: 'DCM Ostrava',
      },
    },
  ]

  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-device-width: 1224px)',
  })

  const showDesktop = () => {
    return organizations.map((org, index) => (
      <Row key={index}>
        <Column
          md={5}
          style={{
            alignItems: 'center',
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          <div>
            <H3>{org.title}</H3>
            <Paragraph style={{ padding: '20px' }}>{org.text}</Paragraph>
            <Paragraph style={{ padding: '0 20px', textAlign: 'center' }}>
              <OutedButton
                href={org.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                WEBOVÁ STRÁNKA
              </OutedButton>
            </Paragraph>
          </div>
        </Column>
        <Column md={7}>
          <img src={org.image_full.src} alt={org.image_full.alt} width="100%" />
        </Column>
      </Row>
    ))
  }

  const showMobile = () => {
    return organizations.map((org, index) => (
      <div key={index}>
        <H3>{org.title}</H3>
        <img src={org.logo} alt="Logo" />
        <Paragraph mobile>{org.text}</Paragraph>
        <Paragraph mobile style={{ textAlign: 'center' }}>
          <OutedButton href={org.url} target="_blank" rel="noopener noreferrer">
            WEBOVÁ STRÁNKA
          </OutedButton>
        </Paragraph>
        <img
          style={{ paddingBottom: '30px' }}
          src="images/duchovni-program-v-ostrave/bg.svg"
          alt="Ilustration"
        />
      </div>
    ))
  }

  return (
    <>
      <Container>
        <H2Color>DUCHOVNÍ PROGRAM V OSTRAVĚ</H2Color>
        {isDesktopOrLaptop ? showDesktop() : showMobile()}
      </Container>
      <Footer />
    </>
  )
}
