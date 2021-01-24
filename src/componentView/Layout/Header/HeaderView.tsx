import React from 'react'

import { HeaderViewWrapper } from './Styled/HeaderViewStyled'

interface HeaderViewProps {
  products: Record<string, unknown>[]
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
