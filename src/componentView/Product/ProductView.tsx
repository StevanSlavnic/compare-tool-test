import React from 'react'

import {
  ProductViewGeneralImage,
  ProductViewGeneral,
  ProductViewGeneralName,
  ProductViewGeneralPrice
} from './Styled/ProductViewStyled'

interface ProductViewProps {
  product: {
    general: {
      productimage: string
      name: string
      listprice: string
    }
  }
}

export const ProductView = (props: ProductViewProps) => {
  const {
    product: { general }
  } = props

  return (
    <ProductViewGeneral>
      <ProductViewGeneralImage>
        <img src={general.productimage} alt={general.name} />
      </ProductViewGeneralImage>

      <ProductViewGeneralName>{general.name}</ProductViewGeneralName>
      <ProductViewGeneralPrice>
        {general.listprice} <div>per stuk / excl. btw</div>
      </ProductViewGeneralPrice>
    </ProductViewGeneral>
  )
}
