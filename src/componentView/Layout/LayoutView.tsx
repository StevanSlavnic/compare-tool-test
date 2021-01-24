import React from 'react'

import { withProducts } from 'context/Products/ProductsConsumer'
import { CompareProvider } from 'context'

import { ProductsSideBar, ProductsList } from 'componentContainer'
import { HeaderView, FooterView } from 'componentView'

import { LayoutViewOuter, LayoutViewWrapper } from './Styled/LayoutViewStyled'

interface LayoutViewProps {
  productsContext: {
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
    productsContext: {
      state: { products },
      actions: { hideProduct },
    },
  } = props

  if (!products.length) {
    return 'Loading...'
  }

  return (
    <>
      <LayoutViewOuter>
        <HeaderView products={products} />
        <CompareProvider products={products}>
          <LayoutViewWrapper>
            <ProductsSideBar products={products} hideProduct={hideProduct} />
            <ProductsList />
          </LayoutViewWrapper>
        </CompareProvider>
        <FooterView />
      </LayoutViewOuter>
    </>
  )
}

export default withProducts(LayoutView)
