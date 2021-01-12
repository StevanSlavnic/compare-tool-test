import React from 'react'

import { HeaderView, FooterView } from 'componentView'
import { SideBar } from 'componentContainer'

import { ProductsList } from 'componentContainer'
import { withProducts } from 'context/Products/ProductsConsumer'

const LayoutView = (props: any) => {
  console.log()
  return (
    <>
      <HeaderView {...props} />
      <>
        <SideBar {...props} />

        <ProductsList {...props} />
      </>
      <FooterView />
    </>
  )
}

export default withProducts(LayoutView)
