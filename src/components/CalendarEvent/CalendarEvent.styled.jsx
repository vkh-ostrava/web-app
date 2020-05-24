import styled from 'styled-components'

export const Title = styled.h3`
  font-family: 'Bebas Neue';
  font-size: 2.5rem;
  line-height: 2.5rem;
  margin: 0rem;
  padding: 0rem;
  font-style: normal;
  font-weight: normal;
  text-transform: uppercase;
  color: ${props => props.color || 'gray'};
`

export const Time = styled(Title)`
  font-size: 2rem;
  line-height: 2rem;
`

export const Card = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  text-align: left;
  flex-direction: ${props => {
    if (props.reverse) {
      return 'row-reverse'
    }
  }};
  margin-top: ${props => (props.mobile ? '10px' : '-20px')};
`

export const TextContainer = styled.div`
  display: flex;
  flex-direction: ${props =>
    props.mobile ? 'column' : props.reverse ? 'row-reverse' : 'row'};
  width: 400px;
  max-height: 250px;
  padding: ${props => {
    if (props.mobile) return props.reverse ? '20px' : '20px 5px 20px 40px'
    return props.reverse ? '20px 20px 20px 5px' : '20px 5px 20px 40px'
  }};
  margin: 0px 0px 0px -19px;
  margin: ${props => (props.reverse ? '0 -39px 0 39px' : '')};
  background-color: ${props => props.color};
  border-radius: ${props => {
    if (props.mobile) return '5px'
    return props.reverse ? '5px 0 0 5px' : '0 5px 5px 0'
  }};
`

export const SocialContainer = styled.div`
  text-align: right;
  margin: ${props =>
    props.mobile ? '0 0 0 0' : props.reverse ? '0 auto 0 0 ' : '0 0 0 auto'};
  width: 40px;
  padding: 0 10px;
  display: flex;
  flex-direction: ${props => (props.mobile ? 'row' : 'column')};

  & > * {
    padding: 2px;
  }
`
