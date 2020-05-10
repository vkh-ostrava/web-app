import styled from 'styled-components'

export const Wrapper = styled.div``

export const Container = styled.div`
  width: 90%;
  margin: 0 auto;
  max-width: 1300px;

  background-image: url('logoVKH.png');
  background-size: contain;
  background-position: right;
  background-repeat: no-repeat;

  @media only screen and (max-width: 768px) {
    width: 95%;
    margin: 0 auto;
    align-self: center;
    background-image: url('/images/bg/container01.png');
    background-size: contain;
    background-position: right bottom;
    background-repeat: no-repeat;
  }
`

export const Title = styled.h1`
  font-family: 'Bebas Neue';
  font-size: 6.3rem;
  font-style: normal;
  margin: 0;
  font-weight: normal;
  text-transform: uppercase;
  text-align: left;
  background-image: url('/images/bg/bg10.png');
  background-size: contain;
  background-position: 350px;
  background-repeat: no-repeat;

  @media only screen and (max-width: 768px) {
    background-image: url('/images/bg/bg10.png');
    background-size: contain;
    background-position: right bottom;
    background-repeat: no-repeat;
  }
`

export const Header = styled.p`
  text-align: left;
  font-family: 'Montserrat', sans-serif;
  font-size: larger;
  margin-bottom: 10px;
  font-weight: 600;
`

export const Paragraph = styled.p`
  text-align: left;
  font-family: 'Montserrat', sans-serif;
`
