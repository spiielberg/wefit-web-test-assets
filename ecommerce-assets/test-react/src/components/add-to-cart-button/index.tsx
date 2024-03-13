import addShoppingCartImg from '../../assets/add-shopping-cart.svg'

import { ButtonText, CartIcon, Container, Counter } from './style'

type ButtonProps = React.ComponentProps<'button'> & {
  title: string
  count?: number
}

export const Button = ({ count, title, ...props }: ButtonProps) => {
  return (
    <Container hasThisProductInCart={!!(count && count > 0)} {...props}>
      <CartIcon src={addShoppingCartImg} alt="Add Shopping Cart" />

      <Counter>{count}</Counter>

      <ButtonText>{title}</ButtonText>
    </Container>
  )
}
