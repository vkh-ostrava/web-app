import React from 'react'
import { DarkSection, Row, Column } from '../styles/style'
import { Container, Title, Paragraph, Header } from './Footer.styled'

export default function Footer() {
  return (
    <DarkSection>
      <Container>
        <Row>
          <Column>
            <Title> VKH OSTRAVA</Title>
          </Column>
        </Row>
        <Row>
          <Column xs={12} md={5}>
            <Header>Fakturační údaje</Header>
            <Paragraph>
              Vysokoškolské katolické hnutí Ostrava z. s. <br />
              Kostelní náměstí 1 <br />
              728 02 Ostrava-Moravská Ostrava
              <br />
              IČO: 26645858
            </Paragraph>
          </Column>
          <Column xs={12} md={5}>
            <Header>Číslo účtu pro vaše dary</Header>
            <Paragraph>2900244843 / 2010</Paragraph>
          </Column>
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
        </Row>
        <Row>
          <Column>
            <div
              style={{
                color: 'orange',
                marginTop: '10px',
                textAlign: 'center',
                fontWeight: 'bold',
              }}
            >
              Mše každé útery od 19 hodiny
            </div>
            <Paragraph style={{ textAlign: 'center' }}>
              VKH Ostrava se schází v kostele sv. Cyrila a Metoděje v Pustkovci
              Pustkovecká 350/32b, 708 00 Ostrava
            </Paragraph>
          </Column>
        </Row>
      </Container>
    </DarkSection>
  )
}
