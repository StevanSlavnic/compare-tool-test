import React from 'react'
import { shallow } from 'enzyme'
import { ProductsListView } from 'componentView'
import { products } from 'mockData'

it('renders FeaturesList', () => {
  const product = products[0]
  const children = <div></div>
  const component = shallow(
    <ProductsListView product={product}>{children}</ProductsListView>
  )
  expect(component).toMatchSnapshot()
})
