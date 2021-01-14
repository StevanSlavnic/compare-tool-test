import React from 'react'

import { ProductsListView } from 'componentView/ProductsList/ProductsListView'
import { ProductView } from 'componentView'

type Product = {
  features: {
    data: {
      artikelnummer: string
    }
  }
  general: { name: string }
}

type ProductsListProps = {
  context: {
    state: {
      products: []
    }
  }
}

export const ProductsList = (props: ProductsListProps) => {
  const {
    context: {
      state: { products }
    }
  } = props

  const renderProduct = products.map((product: Product) => {
    const data = product.features.data
    return <ProductView key={data.artikelnummer} product={product} />
  })

  return (
    <>
      <ProductsListView renderProduct={renderProduct} />
    </>
  )
}
