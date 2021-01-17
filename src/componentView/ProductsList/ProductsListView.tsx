import React from 'react'

import {
  ProductsListViewWrapper,
  ProductsListViewProducts
} from './Styled/ProductsListViewStyles'

export const ProductsListView = (props: any) => {
  const { product, children } = props

  return (
    <ProductsListViewWrapper>
      <ProductsListViewProducts>{product}</ProductsListViewProducts>
      <div>{children}</div>
    </ProductsListViewWrapper>
  )
}
