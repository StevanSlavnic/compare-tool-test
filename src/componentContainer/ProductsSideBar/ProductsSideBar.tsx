import React from 'react'
import { ProductsSideBarView } from 'componentView'

interface Product {
  id: string
  general: { name: string }
  isHidden: boolean
}

interface SideBarProps {
  products: []
  hideProduct: (id: string) => void
}

export const ProductsSideBar = (props: SideBarProps) => {
  const { products, hideProduct } = props

  const handleHideProduct = (id: string) => {
    hideProduct(id)
  }

  const renderProductName = products.map((product: Product) => {
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

  return <ProductsSideBarView>{renderProductName}</ProductsSideBarView>
}
