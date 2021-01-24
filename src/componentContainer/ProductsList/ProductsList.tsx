import React from 'react'

import { ProductsListView, ProductView } from 'componentView'
import { FeaturesList } from 'componentContainer'
import { withProducts } from 'context'

interface Product {
  id: string
  general: {
    productimage: string
    name: string
    listprice: string
  }
  isHidden: boolean
}

interface ProductsListProps {
  productsContext: {
    state: {
      products: Product[]
    }
    actions: {
      hideProduct: (id: string) => void
    }
  }
}

const ProductsList = (props: ProductsListProps) => {
  const {
    productsContext: {
      state: { products },
      actions: { hideProduct }
    }
  } = props

  /* Iterate over products and return products that are not hidden */
  const product = products.map((product: Product) => {
    const { id, isHidden } = product

    return !isHidden ? (
      <ProductView key={id} product={product} hideProduct={hideProduct} />
    ) : (
      ''
    )
  })

  return (
    <>
      <ProductsListView product={product}>
        <FeaturesList />
      </ProductsListView>
    </>
  )
}

export default withProducts(ProductsList as React.FunctionComponent)
