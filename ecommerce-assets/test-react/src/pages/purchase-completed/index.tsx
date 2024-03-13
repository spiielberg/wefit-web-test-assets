import { useEffect } from 'react'
import { Link } from 'react-router-dom'

import purchaseCompletedImg from '../../assets/purchase-completed.svg'
import { useProductContext } from '../../context/product-context'
import { Button } from '../../components/button'

import { Content, Img, Text, ImageContainer, Container } from './style'

export const PurchaseCompleted = () => {
  const { setCart } = useProductContext()

  useEffect(() => {
    setCart([])
  }, [setCart])

  return (
    <Container>
      <Content>
        <Text>Compra realizada com sucesso!</Text>

        <ImageContainer>
          <Img src={purchaseCompletedImg} alt="Empty cart" />
        </ImageContainer>

        <Link to="/" style={{ width: 173, marginTop: 24 }}>
          <Button type="button">VOLTAR</Button>
        </Link>
      </Content>
    </Container>
  )
}
