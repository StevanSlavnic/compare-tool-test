import React from 'react'

import {
  ProductsListViewWrapper,
  ProductsListViewProducts
} from './Styled/ProductsListViewStyles'

interface ProductsListViewProps {
  product: React.ReactNode
  children: JSX.Element
}

export const ProductsListView = (props: ProductsListViewProps) => {
  const { product, children } = props

  return (
    <ProductsListViewWrapper>
      <ProductsListViewProducts>{product}</ProductsListViewProducts>
      {children}
    </ProductsListViewWrapper>
  )
}
