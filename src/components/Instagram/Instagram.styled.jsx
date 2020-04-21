import styled from 'styled-components'

export const Image = styled.img`
  align-self: center;
  width: 100%;
`

export const ImageWrapper = styled.div`
  transition: -webkit-transform ease-out 300ms, -moz-transform ease-out 300ms,
    -o-transform ease-out 300ms, transform ease-out 300ms;
  width: 100%;
  margin-bottom: -63px;

  &:hover {
    transform: scale(1.2);
    z-index: 10;
  }
  & > div {
    position: relative;
    padding: 20px 10px;
    visibility: hidden;
    bottom: 50px;
    background-color: rgba(0, 0, 0, 0);
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    & > a {
      color: white;
    }
  }

  &:hover > div {
    visibility: visible;
    color: white;
    font-weight: bold;
    background-color: rgba(0, 0, 0, 1);
    -webkit-transition: background-color 300ms ease-out;
    -ms-transition: background-color 300ms ease-out;
    transition: background-color 300ms ease-out;
  }
`
