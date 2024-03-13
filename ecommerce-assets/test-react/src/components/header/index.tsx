import { Link } from 'react-router-dom'

import {
  CartContainer,
  CartContent,
  CartSubtitle,
  CartTitle,
  Container,
  Content,
  Logo,
} from './style'

import cartIcon from '../../assets/cart-icon.svg'
import { useProductContext } from '../../context/product-context'

export const Header = () => {
  const { cart, products } = useProductContext()

  return (
    <Container>
      <Content>
        <Logo to={products.length > 0 ? '/' : '#'}>WeMovies</Logo>

        <Link to={products.length > 0 ? '/cart' : '#'}>
          <CartContainer>
            <CartContent>
              <CartTitle>Meu Carrinho</CartTitle>
              <CartSubtitle>
                {cart.length} ite{cart.length === 1 ? 'm' : 'ns'}
              </CartSubtitle>
            </CartContent>

            <img src={cartIcon} alt="Carrinho" />
          </CartContainer>
        </Link>
      </Content>
    </Container>
  )
}
