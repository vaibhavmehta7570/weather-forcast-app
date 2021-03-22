import React from 'react'
import Navbar from './navbar'
import renderer from 'react-test-renderer'
import { BrowserRouter } from 'react-router-dom'

describe('Should test navbar.js', () => {
  test('Should render navbar component correctly', () => {
    const navbarRendererResponse = renderer
      .create(
        <BrowserRouter>
          <Navbar />
        </BrowserRouter>
      )
      .toJSON()
    expect(navbarRendererResponse).toMatchSnapshot()
  })
})
