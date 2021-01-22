import React from 'react'
import { shallow } from 'enzyme'
import { FeaturesList } from 'componentContainer'

it('renders FeaturesList', () => {
  const component = shallow(<FeaturesList />)
  expect(component).toMatchSnapshot()
})
