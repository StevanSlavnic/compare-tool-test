import React from 'react'
import { shallow } from 'enzyme'
import { ProductsSideBarView } from 'componentView'
import { productProperties } from 'utils'

it('renders ProductsSideBarView and returns selected product and product feature label', () => {
  const selectedProducts = [<div key={0}>Product 1</div>]
  const productFeatureLabels = Object.values(
    productProperties
  ).map((property: string, i: number) => <div key={i}>{property}</div>)
  const component = shallow(
    <ProductsSideBarView
      selectedProducts={selectedProducts}
      productFeatureLabels={productFeatureLabels}
    />
  )
  expect(component.find('div').at(1).text()).toEqual('Keurmerk')
})
