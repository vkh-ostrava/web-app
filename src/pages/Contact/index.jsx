import React from 'react'
import { compose, withProps } from 'recompose'
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
} from 'react-google-maps'
import { useMediaQuery } from 'react-responsive'

import { Container, Paragraph, H2Color, Column, Row } from '../../styles/style'
import Footer from '../../sections/Footer'

const MyMapComponent = compose(
  withProps({
    googleMapURL:
      'https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyDHKMmPYdY0LZR-IbxdKtFQiNVNRok0iXw',
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `400px` }} />,
    mapElement: <div style={{ height: `100%` }} />,
  }),
  withScriptjs,
  withGoogleMap
)(props => (
  <GoogleMap
    defaultZoom={15}
    defaultCenter={{ lat: 49.8414404, lng: 18.1690531 }}
  >
    {props.isMarkerShown && (
      <Marker position={{ lat: 49.8414404, lng: 18.1690531 }} />
    )}
  </GoogleMap>
))

const Contact = () => {
  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-device-width: 1224px)',
  })

  const bg = isDesktopOrLaptop ? '500px' : '100%'

  return (
    <>
      <Container>
        <H2Color>KONTAKT</H2Color>
        <Paragraph mobile={!isDesktopOrLaptop}>
          <b>Email:</b>{' '}
          <a href="mailto:predseda@vkhostrava.cz">predseda@vkhostrava.cz</a>
        </Paragraph>
        <Paragraph>
          <Column xs={12} md={2}>
            <Row>
              <Column xs={4}>
                <a
                  href="https://www.youtube.com/user/vkhostrava"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="/images/social/youtube.png"
                    alt="Youtube"
                    width="100%"
                  />
                </a>
              </Column>
              <Column xs={4}>
                <a
                  href="https://www.instagram.com/vkhostrava/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="/images/social/instagram.png"
                    alt="Instagram"
                    width="100%"
                  />
                </a>
              </Column>
              <Column xs={4}>
                <a
                  href="https://www.facebook.com/vkhostrava"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="/images/social/facebook.png"
                    alt="Facebook"
                    width="100%"
                  />
                </a>
              </Column>
            </Row>
          </Column>
        </Paragraph>
        <Paragraph mobile={!isDesktopOrLaptop}>
          <b> Fakturační údaje: </b>
          <br />
          <br />
          Vysokoškolské katolické hnutí Ostrava z. s. <br />
          Kostelní náměstí 1 <br />
          728 02 Ostrava-Moravská Ostrava <br />
          IČO: 26645858 <br /> <br />
          Číslo účtu pro vaše dary: 2900244843 / 2010 <br />
          <br />
          VKH Ostrava se schází v kostele sv. Cyrila a Metoděje v Pustkovci
          Pustkovecká 350/32b, 708 00 Ostrava
          <br />
        </Paragraph>
      </Container>
      <MyMapComponent isMarkerShown />
      <Footer />
    </>
  )
}

export default Contact
