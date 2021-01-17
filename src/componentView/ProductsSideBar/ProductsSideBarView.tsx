import React from 'react'

import {
  ProductsSideBarViewWrapper,
  ProductsSideBarViewHeadline,
  ProductsSideBarViewProductsList
} from './Styled/ProductsSideBarViewStyled'

type ProductsSideBarViewProps = {
  children: JSX.Element[]
}

export const ProductsSideBarView = (props: ProductsSideBarViewProps) => {
  const { children } = props

  return (
    <>
      <ProductsSideBarViewWrapper>
        <ProductsSideBarViewHeadline>Je selectie</ProductsSideBarViewHeadline>

        <ProductsSideBarViewProductsList>
          {children}
        </ProductsSideBarViewProductsList>
      </ProductsSideBarViewWrapper>
    </>
  )
}
