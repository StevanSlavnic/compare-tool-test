import { SideBarView } from 'componentView'
import React from 'react'

type Product = {
  features: {
    data: {
      artikelnummer: string
    }
  }
  general: { name: string }
}

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

export const SideBar = (props: SideBarProps) => {
  const {
    context: {
      state: { products },
      actions: { hideProduct }
    }
  } = props

  const handleHideProduct = (id: string) => {
    hideProduct(id)
  }

  const renderProductName = products.map((product: Product) => {
    const general = product.general
    const data = product.features.data
    return (
      <div key={data.artikelnummer} className={'product-list'}>
        <input
          type="checkbox"
          id={`'product-'${data.artikelnummer}`}
          name={`'product-'${data.artikelnummer}`}
          value={`${general.name}`}
          onChange={() => handleHideProduct(data.artikelnummer)}
        />
        <label htmlFor={`'product-'${data.artikelnummer}`}>{` ${general.name}`}</label>
      </div>
    )
  })

  return <SideBarView productsList={renderProductName} />
}
