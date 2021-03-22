import React from 'react'
import App from './app'
import renderer from 'react-test-renderer'
import { BrowserRouter } from 'react-router-dom'

describe('should test app.js', () => {
  test('should render correctly app component', () => {
    const appRenderResponse = renderer
      .create(
        <BrowserRouter>
          <App />
        </BrowserRouter>
      )
      .toJSON()
    expect(appRenderResponse).toMatchSnapshot()
  })
})
