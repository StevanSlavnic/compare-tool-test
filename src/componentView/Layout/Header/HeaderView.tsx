import React from 'react'

import { HeaderViewWrapper } from './Styled/HeaderViewStyled'

interface HeaderViewProps {
  products: []
}

export const HeaderView = (props: HeaderViewProps) => {
  const { products } = props

  return (
    <>
      <HeaderViewWrapper>
        <div>{products.length} producten vergelijken</div>
      </HeaderViewWrapper>
    </>
  )
}
