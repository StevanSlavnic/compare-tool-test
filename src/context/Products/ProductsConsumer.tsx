import React from 'react'
import { ProductsContext } from 'context/Products/ProductsContext/ProductsContext'

export const withProducts = (Component: any) => {
  return function WrapperComponent(props: any) {
    return (
      <ProductsContext.Consumer>
        {(state: any) => <Component {...props} productsContext={state} />}
      </ProductsContext.Consumer>
    )
  }
}
