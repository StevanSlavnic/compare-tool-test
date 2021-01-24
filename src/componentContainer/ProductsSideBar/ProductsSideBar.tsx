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

/* ProductsSideBar Component is showing checkboxes for hide/show products in sidebar list and showing labels of product features */
const ProductsSideBar = (props: SideBarProps) => {
  const {
    compareContext: {
      state: { tableData }
    },
    products,
    hideProduct
  } = props

  /* Show/hide product by passing id to hideProduct function in products context */
  const handleHideProduct = (id: string) => {
    hideProduct(id)
  }

  /* Iterating over products for showing theit names in checkbox input labels */
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

  /* Iterating over tableData prop from Compare context and get product feature label */
  const productFeatureLabels = tableData.map(
    (row: { isEqual: boolean; name: string }, i: number) => {
      return (
        <ProductSideBarLabels
          key={i}
          className={!row.isEqual ? 'not-equal' : ''}
        >
          <div>{row.name}</div>
        </ProductSideBarLabels>
      )
    }
  )

  return (
    <ProductsSideBarView
      selectedProducts={selectedProducts}
      productFeatureLabels={productFeatureLabels}
    />
  )
}

export default withCompare(ProductsSideBar)
