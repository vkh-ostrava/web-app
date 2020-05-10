import React from 'react'
import { StyledCancelIcon } from './CancelIcon.styled'
import colors from '../../styles/colors'

export const CancelIcon = props => {
  const color = props.theme === 'light' ? colors.BG_DARK : colors.BG_LIGHT
  return (
    <StyledCancelIcon>
      <svg
        id="Capa_1"
        enableBackground="new 0 0 386.667 386.667"
        viewBox="0 0 386.667 386.667"
        xmlns="http://www.w3.org/2000/svg"
        height="45"
        width="45"
      >
        <path
          d="m386.667 45.564-45.564-45.564-147.77 147.769-147.769-147.769-45.564 45.564 147.769 147.769-147.769 147.77 45.564 45.564 147.769-147.769 147.769 147.769 45.564-45.564-147.768-147.77z"
          fill={color}
        />
      </svg>
    </StyledCancelIcon>
  )
}
