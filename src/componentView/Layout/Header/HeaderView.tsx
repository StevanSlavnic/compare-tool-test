import React from 'react'

import { HeaderViewWrapper } from './Styled/HeaderViewStyled'

interface HeaderViewProps {
  context: {
    state: {
      products: {
        products: []
      }
    }
  }
}

export const HeaderView = (props: HeaderViewProps) => {
  console.log('Header View', props)

  const {
    context: {
      state: {
        products: { products }
      }
    }
  } = props

  return (
    <>
      <HeaderViewWrapper>{products.length} producten vergelijken</HeaderViewWrapper>
    </>
  )
}
