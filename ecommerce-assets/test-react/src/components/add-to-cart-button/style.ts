import styled from 'styled-components'

type ButtonProps = {
  hasThisProductInCart?: boolean
}

export const Container = styled.button<ButtonProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 40px;
  width: 100%;
  border-width: 0px;
  border-radius: 4px;
  padding: 0 8px;
  background-color: ${({ hasThisProductInCart }) =>
    hasThisProductInCart ? '#45992B' : '#469cd8'};
  color: #ffffff;
  font-family: 'Open Sans', sans-serif;
  cursor: pointer;
`

export const CartIcon = styled.img`
  margin-right: 6px;
`

export const Counter = styled.p`
  font-size: 12px;
  font-weight: 400;
  color: #ffffff;
  margin-right: 12px;
`

export const ButtonText = styled.p`
  font-size: 12px;
  font-weight: 700;
  color: #ffffff;
`
