import { formatToBRL } from 'brazilian-values'

import { useProductContext } from '../../context/product-context'
import { Product } from '../../context/types'
import { Button } from '../add-to-cart-button'
import { Container, Image, Price, Title } from './style'

interface MovieCardProps {
  product: Product
}

export const MovieCard = ({ product }: MovieCardProps) => {
  const { cart, setCart } = useProductContext()

  const handleAddToCart = () => {
    setCart([...cart, product])
  }

  return (
    <Container>
      <Image src={product.image} alt={product.title} />
      <Title>{product.title}</Title>
      <Price>{formatToBRL(product.price)}</Price>
      <Button
        type="button"
        onClick={handleAddToCart}
        title="ADICIONAR AO CARRINHO"
        count={cart.filter((value) => value.id === product.id).length}
      />
    </Container>
  )
}
