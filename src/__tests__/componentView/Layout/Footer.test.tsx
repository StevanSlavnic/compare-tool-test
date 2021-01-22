import React from 'react'
import { shallow } from 'enzyme'
import { FooterView } from 'componentView/Layout/Footer/FooterView'

it('renders Footer', () => {
  const component = shallow(<FooterView />)
  expect(component).toMatchSnapshot()
})
