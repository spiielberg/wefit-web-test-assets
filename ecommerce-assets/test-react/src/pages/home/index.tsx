import { useCallback, useEffect, useState } from 'react'

import { useProductContext } from '../../context/product-context'
import { getProductsApi } from '../../api/get-products'
import { Loading } from '../../components/loading'
import { MovieCard } from '../../components/movie-card'

import { Container, Content } from './style'

export const Home = () => {
  const [loading, setLoading] = useState(false)

  const { products, setProducts } = useProductContext()

  const getProducts = useCallback(async () => {
    setLoading(true)

    const data = await getProductsApi()

    setProducts(data)

    setLoading(false)
  }, [setProducts])

  useEffect(() => {
    products.length <= 0 && getProducts()
  }, [products, getProducts])

  if (loading) return <Loading />

  return (
    <Container>
      {products.length > 0 && (
        <Content>
          {products.map((product) => (
            <MovieCard key={product.id} product={product} />
          ))}
        </Content>
      )}
    </Container>
  )
}
