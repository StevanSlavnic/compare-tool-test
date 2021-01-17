import React from 'react'

import { withProducts } from 'context/Products/ProductsConsumer'
import { CompareProvider } from 'context'

import { ProductsSideBar, ProductsList } from 'componentContainer'
import { HeaderView, FooterView } from 'componentView'

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
      state: { products },
      actions: { hideProduct }
    }
  } = props

  if (!products.length) {
    return 'loading'
  }

  return (
    <>
      <HeaderView products={products} />
      <CompareProvider products={products}>
        <LayoutViewWrapper>
          <ProductsSideBar products={products} hideProduct={hideProduct} />
          <ProductsList products={products} />
        </LayoutViewWrapper>
      </CompareProvider>

      <FooterView />
    </>
  )
}

export default withProducts(LayoutView)
