import React from 'react'

import { ProductsSideBarView } from 'componentView'

import { withCompare } from 'context'

import { ProductSideBarLabels } from './Styled/ProductsSideBarStyled'

interface Product {
  id: string
  general: { name: string }
  isHidden: boolean
}

interface SideBarProps {
  compareContext: {
    state: { tableData: any }
  }
  products: Product[]

  hideProduct: (id: string) => void
}

const ProductsSideBar = (props: SideBarProps) => {
  const {
    compareContext: {
      state: { tableData }
    },
    products,
    hideProduct
  } = props

  const handleHideProduct = (id: string) => {
    hideProduct(id)
  }

  const selectedProducts = products.map((product: Product) => {
    const { id, general, isHidden } = product

    return (
      <div key={id} className={'product-list'}>
        <input
          checked={!isHidden}
          type="checkbox"
          id={`'product-'${id}`}
          name={`'product-'${id}`}
          value={`${general.name}`}
          onChange={() => handleHideProduct(id)}
        />
        <label htmlFor={`'product-'${id}`}>{` ${general.name}`}</label>
      </div>
    )
  })

  const productFeatureLabels = tableData.map((row: any, i: number) => {
    return (
      <ProductSideBarLabels key={i} className={!row.isEqual ? 'not-equal' : ''}>
        <div>{row.name}</div>
      </ProductSideBarLabels>
    )
  })

  return (
    <ProductsSideBarView
      selectedProducts={selectedProducts}
      productFeatureLabels={productFeatureLabels}
    />
  )
}

export default withCompare(ProductsSideBar)
