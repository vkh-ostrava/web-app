import styled, { css } from 'styled-components'
import colors from './colors'

export const StyledApp = styled.div`
  text-align: center;
  background: ${props => (props.theme.theme === 'light' ? 'white' : '#1c1c1c')};
  color: ${props => (props.theme.theme === 'light' ? 'black' : '#e8e8e8')};
`

export const Paragraph = styled.div`
  font-family: 'Montserrat', sans-serif;
  margin-bottom: 20px;

  text-align: justify;
  ${({ mobile }) => (mobile ? `font-size: 1.2rem` : `font-size: 1.8rem`)}
  ${({ mobile }) => (mobile ? `line-height: 1.5rem` : `line-height: 2.4rem`)}
  ${({ mobile }) => (mobile ? `padding: 0px 20px` : `padding: 0px 100px`)}
`

export const H2 = styled.h2`
  font-family: 'Bebas Neue';
  font-size: 8.3rem;
  margin: 2rem 0;
  font-style: normal;
  font-weight: normal;
  text-transform: uppercase;
  @media only screen and (max-width: 768px) {
    font-size: 6.3rem;
    background-image: url('/images/bg/bg10.png');
    background-size: contain;
    background-position: right bottom;
    background-repeat: no-repeat;
  }
`

export const H2Color = styled(H2)`
  background-image: url('/images/bg/bg10.png');
  background-size: contain;
  background-position: 750px bottom;
  background-repeat: no-repeat;
`

export const H3 = styled.h3`
  font-family: 'Bebas Neue';
  font-size: 3.5rem;
  line-height: 3.5rem;
  margin: 0rem;
  font-style: normal;
  font-weight: normal;
  text-transform: uppercase;
  color: ${props =>
    props.theme.theme === 'light' ? colors.DARK_GREEN : colors.LIGHT_GREEN};
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
  margin-top: 20px;
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
    background-image: url('/images/bg/container01.png');
    background-size: contain;
    background-position: right bottom;
    background-repeat: no-repeat;
  }
`
export const Blockquote = styled.blockquote`
  padding: 10px 25px;
  width: 480px;
  text-align: center;
  position: relative;
  font-style: italic;
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

export const Button = styled.a`
  font-family: 'Montserrat', sans-serif;
  font-size: 1.2rem;
  background-color: ${colors.DARK_GREEN};
  border-radius: 4px;
  border: 1px solid #4b8f29;
  display: inline-block;
  cursor: pointer;
  color: #ffffff;
  text-transform: uppercase;
  text-decoration: none;
  padding: 8px 12px;
  text-shadow: 0px 1px 0px #5b8a3c;
  transition: ease 0.4s;
  margin: 15px 0;
  &:hover {
    background-color: ${colors.LIGHT_GREEN};
  }
  &:active {
    position: relative;
    top: 1px;
  }
`

export const OutedButton = styled.a`
  font-family: 'Montserrat', sans-serif;
  font-size: 1.2rem;
  border-radius: 4px;
  border: 1px solid ${colors.LIGHT_GREEN};
  display: inline-block;
  cursor: pointer;
  text-transform: uppercase;
  text-decoration: none;
  color: ${colors.LIGHT_GREEN};
  padding: 8px 12px;
  transition: ease 0.4s;
  margin: 15px 0;
  &:hover {
    color: ${colors.LIGHT_GREEN};
  }
  &:active {
    position: relative;
    top: 1px;
  }
`
