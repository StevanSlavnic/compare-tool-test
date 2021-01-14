import { SideBarView } from 'componentView'
import React, { useEffect } from 'react'

type SideBarProps = {
  context: {
    state: {
      products: []
    }
    actions: {
      hideProduct: (id: string) => void
    }
  }
}

// type Product = {
//   product: any
// }

export const SideBar = (props: SideBarProps) => {
  const {
    context: {
      state: { products },
      actions: { hideProduct }
    }
  } = props

  useEffect(() => {}, [products])

  const handleHideProduct = (id: string) => {
    hideProduct(id)
  }

  const renderProductName =
    products &&
    products.map((product: any) => (
      <div className={'product-list'} key={product.features.artikelnummer}>
        <input
          type="checkbox"
          id={`'product-'${product.features.artikelnummer}`}
          name={`'product-'${product.features.artikelnummer}`}
          value={`${product.features.name}`}
          onChange={() => handleHideProduct(product.features.artikelnummer)}
        />
        <label
          htmlFor={`'product-'${product.features.artikelnummer}`}
        >{` ${product.general.name}`}</label>
      </div>
    ))

  return <SideBarView productsList={renderProductName} />
}
