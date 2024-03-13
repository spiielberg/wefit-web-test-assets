export interface Product {
  id: string
  title: string
  price: number
  image: string
}

export interface ProductContextType {
  products: Product[]
  setProducts: (products: Product[]) => void
  cart: Product[]
  setCart: (products: Product[]) => void
}
