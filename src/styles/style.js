import styled, { css } from 'styled-components'
import colors from './colors'

export const Paragraph = styled.p`
  font-family: 'Montserrat', sans-serif;
  margin-bottom: 20px;
  text-align: justify;
  ${({ mobile }) => (mobile ? `font-size: 1.0rem` : `font-size: 1.8rem`)}
  ${({ mobile }) => (mobile ? `line-height: 1.5rem` : `line-height: 2.4rem`)}
  ${({ mobile }) => (mobile ? `padding: '0px 10px'` : `padding: '0px 100px'`)}


`

export const H2 = styled.h2`
  font-family: 'Bebas Neue';
  font-size: 6.3rem;
  margin: 2rem 0;
  font-style: normal;
  font-weight: normal;
  text-transform: uppercase;
`

export const H3 = styled.h3`
  font-family: 'Bebas Neue';
  font-size: 3.5rem;
  line-height: 3rem;
  margin: 0rem;
  font-style: normal;
  font-weight: normal;
  text-transform: uppercase;
  color: ${colors.DARK_GREEN};
`

export const Behind = styled.div`
  position: relative;
  width: 100%;
`
export const Infront = styled.div`
  position: absolute;
  right: 0px;
  top: 0px;
  width: 100%;
`
const Section = css`
  padding: 2rem 0;
`

export const LightSection = styled.div`
  ${Section}
  background-color: white;
`

export const DarkSection = styled.div`
  ${Section}
  ${({ bg }) =>
    bg ? `background-color:${bg}` : `background-color:${colors.BG_DARK}`};
  color: white;
`

const CellDimesion = css`
  display: flex;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  flex-basis: 100%;
  flex: 1;
`

export const CellCss = css`
  ${CellDimesion}
  font-family: 'Bebas Neue';
  font-size: 5rem;
  text-transform: uppercase;

  min-height: 100px;
`

export const Cell = styled.div`
  ${CellDimesion}
`

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;

  @media only screen and (max-width: 768px) {
    ${({ reverse }) => (reverse ? 'flex-direction: column-reverse;' : '')};
  }
`

export const InstaRow = styled(Row)`
  @media only screen and (min-width: 768px) {
    width: 90%;
    height: 27%;
    align-self: center;
  }
`

export const Image = styled.img`
  align-self: center;
  width: 100%;
`

function getWidthString(span) {
  if (!span) return
  let width = (span / 12) * 100
  return `width: ${width}%;`
}

export const Column = styled.div`
  ${({ xs }) => (xs ? getWidthString(xs) : 'width: 100%')};
  @media only screen and (min-width: 768px) {
    ${({ sm }) => sm && getWidthString(sm)};
    flex-direction: column-reverse;
  }

  @media only screen and (min-width: 992px) {
    ${({ md }) => md && getWidthString(md)};
  }

  @media only screen and (min-width: 1200px) {
    ${({ lg }) => lg && getWidthString(lg)};
  }
`

export const Container = styled.div`
  width: 90%;
  margin: 0 auto;
  max-width: 1300px;

  @media only screen and (max-width: 768px) {
    width: 95%;
    margin: 0 auto;
    align-self: center;
  }
`
export const Blockquote = styled.blockquote`
  padding: 10px 25px;
  width: 480px;
  text-align: center;
  position: relative;

  font-family: Montserrat;
  font-size: 35px;
  line-height: 34px;
  text-align: center;
  z-index: 10;

  :before,
  :after {
    position: absolute;
    font-size: 100px;
    color: gray;
    /* font-style: normal; */
    font-weight: 700;
  }
  :before {
    content: '„';
    bottom: 30px;
    left: 10px;
  }
  :after {
    content: '“';
    top: 0;
    right: 10px;
  }
`
