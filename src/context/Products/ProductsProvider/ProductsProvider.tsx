import React, { useEffect, useState } from 'react'

import { ProductsContext } from 'context/Products/ProductsContext/ProductsContext'

import { fetchProducts } from 'services/fetchProducts'
import { productRecreated, orderProperties } from 'utils'

interface ProductsProviderProps {
  children: React.ReactNode
}

type IProduct = {}

const ProductsProvider = (props: ProductsProviderProps) => {
  const { children } = props
  const [products, setProducts] = useState<IProduct[]>([])

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetchProducts()

      setTimeout(() => {
        const data = response.products

        const productsO = orderProperties(data)

        const products = productRecreated(productsO)
        setProducts(products)
      }, 800)
    }
    fetchData()
  }, [])

  const hideProduct = (id: string) => {
    console.log(id)
  }

  return (
    <ProductsContext.Provider
      value={{
        state: {
          products
        },
        actions: {
          setProducts,
          hideProduct
        }
      }}
    >
      {children}
    </ProductsContext.Provider>
  )
}

export default ProductsProvider
