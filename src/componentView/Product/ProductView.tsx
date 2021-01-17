import React from 'react'

import { ProductViewGeneral } from './Styled/ProductViewStyled'

export const ProductView = (props: any) => {
  const {
    product: { general }
  } = props

  return (
    <ProductViewGeneral>
      <img src={general.productimage} alt={general.name} />

      <div>{general.name}</div>
      <div>{general.listprice} per stuk / excl. btw</div>
    </ProductViewGeneral>
  )
}
