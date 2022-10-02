import { styled } from '@mui/material'
import React from 'react'

function ButtonIcons({children}) {
  return (
    <ButtonIconsStyled>
      {children}
    </ButtonIconsStyled>
  )
}

const ButtonIconsStyled = styled('div')({
  olor: 'inherit',
  width: '100%',
  border: '1px solid rgba(145, 158, 171, 0.32)',
  height: '4.8rem',
  backgroundColor: 'transparent',
  outline: '0px',
  margin: '0px',
  cursor: 'pointer',
  userSelect: 'none',
  verticalAlign: 'middle',
  appearance: 'none',
  textDecoration: 'none',
  fontWeight: '700',
  textTransform: 'capitalize',
  minWidth: '64px',
  padding: '7px 21px',
  borderRadius: '8px',
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  position: 'relative',
  boxSizing: 'border-box',
  transition: "background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, border-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
    '&:hover':{
        backgroundColor: "rgba(145, 158, 171, 0.08)"
    }
})
export default ButtonIcons
