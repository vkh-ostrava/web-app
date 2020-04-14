import React from 'react'
import styled from 'styled-components'
import colors from '../../styles/colors'

import { Link } from 'react-router-dom'

const SLink = styled(Link)`
  text-decoration: none;

  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }
  @media (max-device-width: 1224px) {
    font-size: 12vw;
  }
  color: ${colors.GREEN};
`

export const StyledLink = props => <SLink {...props} />

export const StyledHamburger = styled.div`
  color: ${colors.BG_DARK};
  position: fixed;
  right: 20px;
  top: 20px;
  z-index: 20;
  cursor: pointer;

  #loading-bar-left {
    animation: loading-bar-morph 5s linear 0.1s infinite;
    transform-origin: center;
    color: blue;
  }
  #loading-bar-middle {
    animation: loading-bar-morph 5s linear 0.2s infinite;
    transform-origin: center;
  }
  #loading-bar-right {
    animation: loading-bar-morph 5s linear 0.4s infinite;
    transform-origin: center;
  }

  @keyframes loading-bar-morph {
    0% {
      transform: scaleX(1);
    }
    25% {
      transform: scaleX(0.7);
    }
    50% {
      transform: scaleX(0.9);
    }
    75% {
      transform: scaleX(0.7);
    }
  }
`

export const NavigationPanel = styled.div`
  height: 100%;
  background-color: white;
  position: fixed;
  right: 0;
  z-index: 999;
  flex-direction: column;
  display: flex;
`

export const NavItem = styled.div`
  padding: 30px 20px 0 150px;
  font-family: 'Bebas Neue';
  font-size: 3.5rem;
  line-height: 3rem;
  margin: 0rem;
  font-style: normal;
  font-weight: normal;
  text-transform: uppercase;
  color: black;
  align-self: flex-end;
  @media (max-device-width: 1224px) {
    padding: 5px 20px 0 0px;
    text-align: right;
  }
`

export const Switch = styled.label`
  position: fixed;
  right: 20px;
  top: 70px;
  z-index: 20;
  cursor: pointer;
  background: #7c7c7c;
  padding: 7px;
  width: 50px;
  height: 25px;
  border-radius: 25px;
  input {
    position: absolute;
    opacity: 0;
    width: 0;
    height: 0;
  }

  div {
    height: 100%;
    display: grid;
    grid-template-columns: 0fr 1fr 1fr;
    transition: 0.2s;
    &::after {
      content: '';
      border-radius: 50%;
      background: #15273b;
      grid-column: 2;
      transition: background-color 0.3s;
    }
  }
  input:checked {
    + .switch {
      grid-template-columns: 1fr 1fr 0fr;
      &::after {
        background-color: white;
      }
    }
  }
`
