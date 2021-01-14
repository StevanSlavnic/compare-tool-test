import React from 'react'

import { HeaderView, FooterView } from 'componentView'
import { ProductsList, SideBar } from 'componentContainer'

import { withProducts } from 'context/Products/ProductsConsumer'

import { LayoutViewWrapper } from './Styled/LayoutViewStyled'

interface LayoutViewProps {
  context: {
    state: {
      products: []
    }
    actions: {
      hideProduct: (id: string) => void
    }
  }
}

const LayoutView = (props: LayoutViewProps) => {
  const {
    context: {
      state: { products }
    }
  } = props

  if (!products.length) {
    return 'loading'
  }

  return (
    <>
      <HeaderView products={products} />
      <LayoutViewWrapper>
        <SideBar {...props} />

        <ProductsList {...props} />
      </LayoutViewWrapper>
      <FooterView />
    </>
  )
}

export default withProducts(LayoutView)
