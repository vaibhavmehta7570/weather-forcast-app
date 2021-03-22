import React from 'react'
import Loading from './Loading'
import renderer from 'react-test-renderer'

describe('should test app.js', () => {
  test('should render Loading div correctly', () => {
    const appRenderResponse = renderer.create(<Loading />).toJSON()
    expect(appRenderResponse).toMatchSnapshot()
  })
})
