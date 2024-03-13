import { formatToBRL } from 'brazilian-values'
import { Link } from 'react-router-dom'

import emptyCartImg from '../../assets/empty-cart.svg'
import trashImg from '../../assets/trash.svg'
import minusImg from '../../assets/minus.svg'
import plusImg from '../../assets/plus.svg'
import { useProductContext } from '../../context/product-context'
import { Button } from '../../components/button'

import {
  ActionButton,
  CartContent,
  Container,
  CountText,
  EmptyCartContent,
  EmptyCartImg,
  EmptyCartText,
  ImageContainer,
  PriceText,
  ProductGridContainer,
  ProductGridContent,
  ProductGridImage,
  ProductFlexImage,
  ProductPrice,
  ProductTitle,
  ProductsContainer,
  ProductGridTitle,
  ProductFlexContainer,
  ProductFlexContent,
  FinishButtonContainer,
  FinishContainer,
  FinishText,
  FinishPrice,
  FinishTextContainer,
} from './style'
import { Fragment } from 'react/jsx-runtime'
import { Divider } from '../../components/divider'

export const Cart = () => {
  const { products, cart, setCart } = useProductContext()

  const handleRemoveOneProduct = (id: string) => {
    const newCart = [...cart].reverse()
    const indexToRemove = newCart.findIndex((item) => item.id === id)

    if (indexToRemove !== -1) {
      newCart.splice(indexToRemove, 1)
    }

    newCart.reverse()

    setCart(newCart)
  }

  const handleAddOneProduct = (id: string) => {
    const product = products.find((item) => item.id === id)

    if (product) {
      setCart([...cart, product])
    }
  }

  const handleRemoveFromCart = (id: string) => {
    const newCart = cart.filter((item) => item.id !== id)

    setCart(newCart)
  }

  return (
    <Container>
      {cart.length > 0 ? (
        <CartContent>
          <ProductsContainer>
            <ProductGridTitle>PRODUTO</ProductGridTitle>
            <ProductGridTitle>QTD</ProductGridTitle>
            <ProductGridTitle>SUBTOTAL</ProductGridTitle>
            <ProductGridTitle />

            {cart.map((product, index) => {
              const alreadyShowed =
                cart.findIndex((value) => value.id === product.id) < index

              if (alreadyShowed) {
                return null
              }

              const count = cart.filter(
                (value) => value.id === product.id,
              ).length

              return (
                <Fragment key={product.id}>
                  <ProductGridContainer>
                    <ProductGridContent>
                      <ProductGridImage
                        src={product.image}
                        alt={product.title}
                      />
                      <div>
                        <ProductTitle>{product.title}</ProductTitle>
                        <ProductPrice>
                          {formatToBRL(product.price)}
                        </ProductPrice>
                      </div>
                    </ProductGridContent>
                  </ProductGridContainer>
                  <ProductGridContainer>
                    <ActionButton
                      type="button"
                      onClick={() => handleRemoveOneProduct(product.id)}
                    >
                      <img src={minusImg} alt="Remover 1" />
                    </ActionButton>

                    <CountText>{count}</CountText>

                    <ActionButton
                      type="button"
                      onClick={() => handleAddOneProduct(product.id)}
                    >
                      <img src={plusImg} alt="Adicionar 1" />
                    </ActionButton>
                  </ProductGridContainer>
                  <ProductGridContainer>
                    <PriceText>{formatToBRL(product.price * count)}</PriceText>
                  </ProductGridContainer>
                  <ProductGridContainer>
                    <ActionButton
                      type="button"
                      onClick={() => handleRemoveFromCart(product.id)}
                    >
                      <img src={trashImg} alt="Remover do carrinho" />
                    </ActionButton>
                  </ProductGridContainer>

                  <ProductFlexContainer>
                    <ProductFlexImage src={product.image} alt={product.title} />

                    <ProductFlexContent>
                      <ProductTitle>{product.title}</ProductTitle>

                      <ProductFlexContainer>
                        <ActionButton
                          type="button"
                          onClick={() => handleRemoveOneProduct(product.id)}
                        >
                          <img src={minusImg} alt="Remover 1" />
                        </ActionButton>

                        <CountText>{count}</CountText>

                        <ActionButton
                          type="button"
                          onClick={() => handleAddOneProduct(product.id)}
                        >
                          <img src={plusImg} alt="Adicionar 1" />
                        </ActionButton>
                      </ProductFlexContainer>
                    </ProductFlexContent>

                    <ProductFlexContent
                      style={{
                        marginLeft: 'auto',
                        justifyContent: 'space-between',
                      }}
                    >
                      <div
                        style={{
                          display: 'flex',
                          flexDirection: 'row',
                          gap: '16px',
                        }}
                      >
                        <ProductPrice>
                          {formatToBRL(product.price)}
                        </ProductPrice>

                        <ActionButton
                          type="button"
                          onClick={() => handleRemoveFromCart(product.id)}
                          style={{ marginTop: '2px' }}
                        >
                          <img src={trashImg} alt="Remover do carrinho" />
                        </ActionButton>
                      </div>

                      <div>
                        <p
                          style={{
                            fontSize: '14px',
                            fontWeight: 700,
                            color: '#999999',
                          }}
                        >
                          SUBTOTAL
                        </p>
                        <PriceText>
                          {formatToBRL(product.price * count)}
                        </PriceText>
                      </div>
                    </ProductFlexContent>
                  </ProductFlexContainer>
                </Fragment>
              )
            })}
          </ProductsContainer>

          <div style={{ margin: '24px 0' }}>
            <Divider />
          </div>

          <FinishContainer>
            <FinishButtonContainer>
              <Link to="/purchase-completed">
                <Button type="button">FINALIZAR PEDIDO</Button>
              </Link>
            </FinishButtonContainer>

            <FinishTextContainer>
              <FinishText>TOTAL</FinishText>
              <FinishPrice>
                {formatToBRL(
                  cart.reduce((total, product) => total + product.price, 0),
                )}
              </FinishPrice>
            </FinishTextContainer>
          </FinishContainer>
        </CartContent>
      ) : (
        <EmptyCartContent>
          <EmptyCartText>Parece que não há nada por aqui :{'('}</EmptyCartText>

          <ImageContainer>
            <EmptyCartImg src={emptyCartImg} alt="Empty cart" />
          </ImageContainer>

          <Link to="/" style={{ width: 173, marginTop: 24 }}>
            <Button type="button">Recarregar página</Button>
          </Link>
        </EmptyCartContent>
      )}
    </Container>
  )
}
