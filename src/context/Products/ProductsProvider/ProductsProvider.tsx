import React, { useEffect, useState } from 'react'

import { ProductsContext } from 'context/Products/ProductsContext/ProductsContext'

import { fetchProducts } from 'services/fetchProducts'
import { productRecreated, orderProperties } from 'utils'

interface ProductsProviderProps {
  children: React.ReactNode
}

interface Product {
  id: string
  isHidden: boolean
}

export const ProductsProvider = (props: ProductsProviderProps) => {
  const { children } = props
  const [products, setProducts] = useState<Product[]>([])

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetchProducts()

      setTimeout(() => {
        const data = response.products

        const ordered = orderProperties(data)

        if (ordered) {
          const products = productRecreated(ordered)

          setProducts(products)
        }
      }, 800)
    }
    fetchData()
  }, [])

  const hideProduct = (id: string) => {
    setProducts((prevProducts) =>
      prevProducts.map((product) =>
        product.id === id
          ? { ...product, isHidden: !product.isHidden }
          : product,
      ),
    )
  }

  return (
    <ProductsContext.Provider
      value={{
        state: {
          products,
        },
        actions: {
          setProducts,
          hideProduct,
        },
      }}
    >
      {children}
    </ProductsContext.Provider>
  )
}
