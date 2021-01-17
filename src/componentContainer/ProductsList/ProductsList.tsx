import React from 'react'

import { ProductsListView, ProductView } from 'componentView'
import { FeaturesList } from 'componentContainer'

interface Product {
  id: string
  isHidden: boolean
}

interface ProductsListProps {
  products: Product[]
}

export const ProductsList = (props: ProductsListProps) => {
  const { products } = props

  const product = products.map((product: Product) => {
    const { id, isHidden } = product

    return !isHidden ? <ProductView key={id} product={product} /> : ''
  })

  return (
    <>
      <ProductsListView product={product}>
        <FeaturesList />
      </ProductsListView>
    </>
  )
}
