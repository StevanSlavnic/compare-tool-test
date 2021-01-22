import React from 'react'
import { shallow } from 'enzyme'
import { FeaturesListView } from 'componentView'

it('renders FeaturesList', () => {
  const children = [<div key={0}></div>, <div key={1}></div>]
  const component = shallow(<FeaturesListView>{children}</FeaturesListView>)
  expect(component).toMatchSnapshot()
})
