import React, { useEffect, useState } from 'react'

import { ProductsContext } from 'context/Products/ProductsContext/ProductsContext'

import { fetchProducts } from 'services/fetchProducts'

interface ProductsProviderProps {
  children: React.ReactNode
}

const ProductsProvider = (props: ProductsProviderProps) => {
  const { children } = props
  const [products, setProducts] = useState({})

  useEffect(() => {
    async function fetchData() {
      const response = await fetchProducts()
      setProducts(response)
    }
    fetchData()
  }, [])

  console.log(products)

  return (
    <ProductsContext.Provider
      value={{
        state: {
          products
        },
        actions: {
          setProducts
        }
      }}
    >
      {children}
    </ProductsContext.Provider>
  )
}

export default ProductsProvider
