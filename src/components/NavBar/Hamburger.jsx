import React from 'react'
import { StyledHamburger } from './NavBar.styled'
import colors from '../../styles/colors'

export const Hamburger = props => {
  const color = props.theme === 'light' ? colors.BG_DARK : colors.BG_LIGHT
  return (
    <StyledHamburger>
      <svg
        id="loading-bar"
        xmlns="http://www.w3.org/2000/svg"
        width="50"
        height="36"
        viewBox="0 0 50 36"
      >
        <g>
          <rect id="loading-bar-left" width="45" height="7" fill={color} />
          <rect
            id="loading-bar-middle"
            width="45"
            height="7"
            y="14"
            fill={color}
          />
          <rect
            id="loading-bar-right"
            width="45"
            height="7"
            y="28"
            fill={color}
          />
        </g>
      </svg>
    </StyledHamburger>
  )
}
