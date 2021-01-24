import React from 'react'

import {
  ProductViewGeneral,
  ProductViewDelete,
  ProductViewImage,
  ProductViewGeneralImage,
  ProductViewGeneralName,
  ProductViewGeneralPrice
} from './Styled/ProductViewStyled'

import { DeleteIcon } from 'assets/icons'

interface ProductViewProps {
  product: {
    id: string
    general: {
      productimage: string
      name: string
      listprice: string
    }
  }
  hideProduct: (id: string) => void
}

export const ProductView = (props: ProductViewProps) => {
  const {
    product: {
      id,
      general: { name, productimage, listprice }
    },
    hideProduct
  } = props

  return (
    <ProductViewGeneral>
      <ProductViewDelete onClick={() => hideProduct(id)}>
        <DeleteIcon />
      </ProductViewDelete>
      <ProductViewGeneralImage>
        <ProductViewImage src={productimage} alt={name} />
      </ProductViewGeneralImage>

      <ProductViewGeneralName>{name}</ProductViewGeneralName>
      <ProductViewGeneralPrice>
        {listprice} <div>per stuk / excl. btw</div>
      </ProductViewGeneralPrice>
    </ProductViewGeneral>
  )
}
