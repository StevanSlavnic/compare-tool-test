import React from 'react'

import { ProductsListView } from 'componentView/ProductsList/ProductsListView'

export const ProductsList = (props: any) => {
  console.log(props)
  return (
    <>
      <ProductsListView {...props} />
    </>
  )
}
