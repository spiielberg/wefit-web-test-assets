export const getProductsApi = async () => {
  await new Promise((resolve) => setTimeout(resolve, 2000))

  const response = await fetch('http://localhost:3333/products')

  const data = await response.json()

  return data
}
