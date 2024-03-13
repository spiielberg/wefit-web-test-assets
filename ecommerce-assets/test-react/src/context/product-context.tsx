import React, { createContext, useState, useContext, ReactNode } from 'react'

import { Product, ProductContextType } from './types'

const ProductContext = createContext<ProductContextType | undefined>(undefined)

const useProductContext = () => {
  const context = useContext(ProductContext)

  if (!context) {
    throw new Error('useProductContext must be used within a ProductProvider')
  }
  return context
}

interface ProductProviderProps {
  children: ReactNode
}

const ProductProvider: React.FC<ProductProviderProps> = ({ children }) => {
  const [products, setProducts] = useState<Product[]>([])
  const [cart, setCart] = useState<Product[]>([])

  return (
    <ProductContext.Provider value={{ products, setProducts, cart, setCart }}>
      {children}
    </ProductContext.Provider>
  )
}

// eslint-disable-next-line react-refresh/only-export-components
export { useProductContext, ProductProvider }
