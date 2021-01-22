import React from 'react'
import { shallow } from 'enzyme'
import Layout from 'componentView/Layout/LayoutView'

it('renders Layout', () => {
  const component = shallow(<Layout />)
  expect(component).toMatchSnapshot()
})
