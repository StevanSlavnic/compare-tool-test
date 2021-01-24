import React from 'react'

import {
  ProductsSideBarViewWrapper,
  ProductsSideBarViewHeadline,
  ProductsSideBarViewProductsList,
  ProductsSideBarViewLables
} from './Styled/ProductsSideBarViewStyled'

interface ProductsSideBarViewProps {
  selectedProducts: JSX.Element | JSX.Element[]
  productFeatureLabels: JSX.Element | JSX.Element[]
}

export const ProductsSideBarView = (props: ProductsSideBarViewProps) => {
  const { selectedProducts, productFeatureLabels } = props

  return (
    <>
      <ProductsSideBarViewWrapper>
        <ProductsSideBarViewHeadline>Je selectie</ProductsSideBarViewHeadline>
        <ProductsSideBarViewProductsList>
          {selectedProducts}
        </ProductsSideBarViewProductsList>
        <ProductsSideBarViewLables>
          {productFeatureLabels}
        </ProductsSideBarViewLables>
      </ProductsSideBarViewWrapper>
    </>
  )
}
