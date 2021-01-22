import React from 'react'
import { shallow } from 'enzyme'
import { HeaderView } from 'componentView/Layout/Header/HeaderView'
import { products } from 'mockData'

it('renders Header', () => {
  const wrapper = shallow(<HeaderView products={products} />)
  const headerText = <div>{products.length} producten vergelijken</div>
  expect(wrapper.contains(headerText)).toEqual(true)
})
