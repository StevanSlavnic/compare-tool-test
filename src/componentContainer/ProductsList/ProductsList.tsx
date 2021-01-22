import React from 'react'

import { ProductsListView, ProductView } from 'componentView'
import { FeaturesList } from 'componentContainer'

interface Product {
  id: string
  general: {
    productimage: string
    name: string
    listprice: string
  }
  isHidden: boolean
}

interface ProductsListProps {
  products: Product[]
}

/* ProductsList Component is resposible for showing the list of products */
export const ProductsList = (props: ProductsListProps) => {
  const { products } = props

  /* Iterate over products and return products that are not hidden */
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
