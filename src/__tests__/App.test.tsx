import React from 'react'
import { shallow } from 'enzyme'
import App from '../App'

test('renders the App', () => {
  const component = shallow(<App />)
  expect(component).toMatchSnapshot()
})

it('renders without crashing', () => {
  shallow(<App />)
})
