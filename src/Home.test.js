import React from 'react'
import Home from './Home'
import renderer from 'react-test-renderer'

describe('Should test Home.js', () => {
  test('Should render Home component correctly', () => {
    const HomeRendererResponse = renderer.create(<Home />).toJSON()
    expect(HomeRendererResponse).toMatchSnapshot()
  })
})
